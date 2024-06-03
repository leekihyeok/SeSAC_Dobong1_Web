package lecture.spring_boot_mybatis.mapper;

import lecture.spring_boot_mybatis.domain.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper //Spring 에게 해다 interface가 매퍼 역할을 하는 interface임을 알림.
public interface UserMapper {
    List<User> retrieveAll();

//    public void insertUser(User user);
}
