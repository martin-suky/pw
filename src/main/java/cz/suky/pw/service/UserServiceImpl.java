package cz.suky.pw.service;

import cz.suky.pw.entity.User;
import cz.suky.pw.repository.UserRepository;
import cz.suky.pw.service.exception.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by none_ on 03/14/16.
 */
@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean verifyUser(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password) == null ? false : true;
    }

    @Override
    public void register(String username, String password) {
        if (userRepository.findByUsername(username) != null) {
            throw UserException.userError("Username already used.");
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        userRepository.save(user);
    }
}
