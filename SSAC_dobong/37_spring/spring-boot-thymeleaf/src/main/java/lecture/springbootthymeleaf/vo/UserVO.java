package lecture.springbootthymeleaf.vo;

import lombok.Getter;

import java.util.List;

@Getter
public class UserVO {
    private String name;
    private String gender;
    private String birthdate;
    private List<String> interests;
    private int age;
    
}