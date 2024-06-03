package lecture.spring_boot_jpa.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity // 해당 클래스가 entity 임을 명시
@Table(name = "board") // user 라는 테이블과 해당 클래스를 매핑
@Getter
@Builder // 전체 필드를 받는 생성자를 필요로 함
@NoArgsConstructor
@AllArgsConstructor
// Entity 와 Builder를 동시에 사용할 경우 해당 어노테이션이 필요로 하는 생성자들을 명시
public class BoardEntity {
    @Id // primary key 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int id;

    @Column(name = "userid", nullable = false, length = 255)
//    @Setter
    private String userid;

    @Column(name = "title", nullable = false, length = 255)
    @Setter
    private String title;


    @Column(name = "content", nullable = false)
    @Setter
    private String content;
}
