package lecture.spring_boot_mybatis.service;

import lecture.spring_boot_mybatis.domain.User;
import lecture.spring_boot_mybatis.dto.UserDTO;
import lecture.spring_boot_mybatis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public List<UserDTO> getUserList(){
        List<User> result = userMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<>();
        for (int i = 0; i < result.size(); i++) {
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return users;
    }

//    public void addUser(User user){
//        userMapper.insertUser(user);
//    }
}
