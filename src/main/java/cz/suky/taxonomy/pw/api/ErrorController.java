package cz.suky.taxonomy.pw.api;

import cz.suky.taxonomy.pw.api.dto.Error;
import cz.suky.taxonomy.pw.service.exception.AbstractServiceException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by none_ on 04/13/16.
 */
@ControllerAdvice
public class ErrorController {

    @ExceptionHandler
    public ResponseEntity<Error> handleError(AbstractServiceException ex) throws IOException {
        return ResponseEntity.status(ex.getHttpStatus()).body(new Error(ex.getHttpStatus(), ex.getMessage()));
    }
}
