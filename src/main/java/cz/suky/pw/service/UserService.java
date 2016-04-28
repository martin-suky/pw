package cz.suky.pw.service;

/**
 * Created by none_ on 03/14/16.
 */
public interface UserService {

    boolean verifyUser(String username, String password);

    void register(String username, String password);
}
