package cz.suky.pw.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by none_ on 04/28/16.
 */
@RestController
public class ErrorController implements org.springframework.boot.autoconfigure.web.ErrorController{

    private static final String PATH = "/error";

    @Override
    public String getErrorPath() {
        return PATH;
    }

    @RequestMapping(PATH)
    public String redirectToApp(HttpServletResponse response) {
        return "index";
    }
}
