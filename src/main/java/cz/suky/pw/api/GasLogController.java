package cz.suky.pw.api;

import cz.suky.pw.entity.GasLog;
import cz.suky.pw.entity.User;
import cz.suky.pw.service.GasLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by none_ on 04/13/16.
 */
@RestController
@RequestMapping("/api/gas")
public class GasLogController {

    private GasLogService gasLogService;

    @Autowired
    public void setGasLogService(GasLogService gasLogService) {
        this.gasLogService = gasLogService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<GasLog>> list(User user) {
        return ResponseEntity.ok(gasLogService.getAll(user));
    }
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<GasLog> save(User user, @RequestBody GasLog gasLog) {
        return ResponseEntity.ok(gasLogService.save(user, gasLog));
    }
}
