package cz.suky.pw.repository;

import cz.suky.pw.entity.User;

/**
 * Created by none_ on 03/13/16.
 */
public interface UserRepository extends AbstractEntityRepository<User> {

    User findByUsernameAndPassword(String username, String password);

    User findByUsername(String username);
}
