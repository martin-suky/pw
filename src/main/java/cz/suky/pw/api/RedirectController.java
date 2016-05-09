package cz.suky.pw.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by none_ on 05/02/16.
 */
@Controller
public class RedirectController {

    @RequestMapping({
            "/login",
            "/main"
    })
    public String index() {
        return "forward:/index.html";
    }
}
