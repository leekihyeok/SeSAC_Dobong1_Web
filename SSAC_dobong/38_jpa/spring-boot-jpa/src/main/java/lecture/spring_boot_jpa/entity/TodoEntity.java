package lecture.spring_boot_jpa.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.stereotype.Service;

@Builder
@Entity
@Table(name="todo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TodoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 30)
    private String title;

    @Column(nullable = false)
    @Builder.Default
    private boolean done=false;

    @ManyToOne
    @JoinColumn(name = "userid", nullable = false)
    @JsonBackReference // User와 Todo 사이의 순환 참조를 방지
    private UserEntity user;
}
