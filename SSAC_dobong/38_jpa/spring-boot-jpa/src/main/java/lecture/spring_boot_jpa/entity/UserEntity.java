package lecture.spring_boot_jpa.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

// 기본 생성자를 필요로 함
@Entity // 해당 클래스가 entity 임을 명시
@Table(name = "user") // user 라는 테이블과 해당 클래스를 매핑
@Getter
@Builder // 전체 필드를 받는 생성자를 필요로 함
@NoArgsConstructor
@AllArgsConstructor
// Entity 와 Builder를 동시에 사용할 경우 해당 어노테이션이 필요로 하는 생성자들을 명시
public class UserEntity {
    @Id // primary key 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int id;

    @Column(name = "name", nullable = false, length = 10)
    private String name;


    @Column(name = "nickname", nullable = false, length = 20)
    private String nickname;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<TodoEntity> todos;

}
