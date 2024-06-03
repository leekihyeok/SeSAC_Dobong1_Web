package springlecture.springbootsecurity.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StreamUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.stream.Stream;

@Component
@Slf4j
public class JwtAuthFilter extends OncePerRequestFilter {

    @Autowired
    private TokenProvider tokenProvider;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            // [Session 인증 방식] - http session에 존재하는 userId 값을 확인해서,
            //                     userId가 존재하면, SecurityContextHolder에
            //                     UserNamePasswordAuthToken 만들어서 저장

            // [Token 인증 방식]
            // - 요청의 Header에 담겨온 token을 뽑아서 유효한지 확인
            // - SecurityContextHolder에 UserNamePasswordToken 만들어서 저장
            String token = parseBearerToken(request);
            log.warn("filter token check {}", token);

            // null / NULL / Null
            if(token != null && !token.equalsIgnoreCase("null")){
                // 대소문자 무시하고 비교
                String userId = tokenProvider.validateAndGetUserId(token);
                Authentication authentication = new UsernamePasswordAuthenticationToken(userId, null, AuthorityUtils.NO_AUTHORITIES);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }

        } catch (Exception e){
            log.error("auth check error {}", e.getMessage());
        }
        filterChain.doFilter(request, response);
    }

    public String parseBearerToken(HttpServletRequest request){
        // 요청의 header의 bearer 토큰에서 jwt token을 뽑아오는 작업
        String bearerToken = request.getHeader("Authorization");

        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")){
            // StringUtils.hasText(bearerToken): null, 공백이 아닌지
            // "Bearer abcdefg" -> "abcdefg"
            return bearerToken.substring(7);
        }
        return null;
    }
}
