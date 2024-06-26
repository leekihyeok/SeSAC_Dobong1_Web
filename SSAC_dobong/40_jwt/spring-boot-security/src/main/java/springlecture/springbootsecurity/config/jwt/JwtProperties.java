package springlecture.springbootsecurity.config.jwt;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties("jwt")
public class JwtProperties {
    // application.properties 값을 java 클래스의 필드와 매핑해서 사용함
    private String issuer;
    private String secretKey;
}
