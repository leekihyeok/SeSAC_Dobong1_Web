package springlecture.springbootsecurity.config;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import springlecture.springbootsecurity.security.JwtAuthFilter;

import java.util.Arrays;

@Configuration // 스프링 설정 클래스임을 알리는 어노테이션
@EnableWebSecurity // 해당 클래스에서 spring security 를 사용하기 위한 어노테이션
public class WebSecurityConfig {

    @Autowired
    private JwtAuthFilter jwtAuthFilter;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        // 비밀번호 암호화 시 사용될 수 있도록 만듦
        return new BCryptPasswordEncoder();
    }

    @Bean // 메소드에 다는 어노테이션. 스프링 컨테이너가 관리할 수 있도록 등록
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // 예외 처리를 필수로 진행할 수 있어야 함.
        http
                .cors(Customizer.withDefaults()) // cors 설정 (react 서버에서 요청을 보낼 수 있도록 함)
                // withDefaults() : Bean 으로 등록되 corsConfigurationSource 라는 메소드를 찾아서 설정
                // .cors(cors -> cors.configurationSource(corsConfigurationSource())) : cors 설정 메소드 이름을 바꾸고 싶은 경우
                .csrf(CsrfConfigurer::disable) // 외부 post, put 요청을 허용하기 위함
                // 로그아웃은 client에서 token 값을 삭제
                .sessionManagement(sessionManagement -> sessionManagement
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                        // IF_REQUIRED가 default
                        // 토큰 인증 인가 방식에서는 session을 사용하지 않기 때문에
                )
                .authorizeHttpRequests(authorize -> authorize
                                .requestMatchers("/auth/**").permitAll()
                                .anyRequest().authenticated()
                );

         http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }


    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true);
        config.setAllowedOriginPatterns(Arrays.asList("*")); // 모든 원본에서의 요청을 허용하는 설정
        config.setAllowedMethods(Arrays.asList("HEAD", "POST", "PATCH", "DELETE", "PUT", "GET"));
        config.setAllowedHeaders(Arrays.asList("*")); // 모든 헤더의 요청을 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }
}