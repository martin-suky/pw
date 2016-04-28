package cz.suky.pw.service;

import cz.suky.pw.entity.GasLog;
import cz.suky.pw.repository.AuditedEntityRepository;
import cz.suky.pw.repository.GasLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by none_ on 04/13/16.
 */
@Service
public class GasLogServiceImpl extends AuditedEntityServiceImpl<GasLog> implements GasLogService {

    private GasLogRepository gasLogRepository;

    @Autowired
    public void setGasLogRepository(GasLogRepository gasLogRepository) {
        this.gasLogRepository = gasLogRepository;
    }

    @Override
    protected AuditedEntityRepository<GasLog> getRepository() {
        return gasLogRepository;
    }

    @Override
    protected GasLog safeMap(GasLog source, GasLog target) {
        target.setAmount(source.getAmount());
        target.setPrice(source.getPrice());
        target.setTotalDistance(source.getTotalDistance());
        return target;
    }

    @Override
    protected GasLog newEntity() {
        return new GasLog();
    }
}
