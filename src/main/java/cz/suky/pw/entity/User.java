package cz.suky.pw.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * User: msoukup
 * Date: 2/12/2016
 * Time: 22:52
 */
@Entity
public class User extends AbstractEntity {

    @Column(unique = true)
    private String username;

    private String firstName;

    private String lastName;

    @JsonIgnore
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(final String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(final String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
