package cz.suky.pw.api.util;

import cz.suky.pw.entity.User;
import cz.suky.pw.service.exception.UserException;
import cz.suky.pw.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import java.util.Base64;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by none_ on 04/13/16.
 */
@Component
public class UserArgumentResolver implements HandlerMethodArgumentResolver {

    private static final Pattern BASIC_AUTHORIZATION = Pattern.compile("Basic (.+)");
    private static final Base64.Decoder DECODER = Base64.getDecoder();

    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return User.class.equals(parameter.getParameterType());
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        String header = webRequest.getHeader(HttpHeaders.AUTHORIZATION);
        if (header == null) {
            ex();
        }

        Matcher matcher = BASIC_AUTHORIZATION.matcher(header);
        if (!matcher.matches()) {
            ex();
        }

        byte[] decode = DECODER.decode(matcher.group(1));
        final String decoded = new String(decode, "UTF-8");

        String[] split = decoded.split(":");
        if (split.length != 2) {
            ex();
        }

        final User user = userRepository.findByUsernameAndPassword(split[0], split[1]);

        if (user == null) {
            ex();
        }

        return user;
    }

    private void ex() {
        throw UserException.notAuthorized();
    }
}
