package cz.suky.taxonomy.pw.service;

import cz.suky.taxonomy.pw.entity.*;
import cz.suky.taxonomy.pw.repository.ConfigurationRepository;
import cz.suky.taxonomy.pw.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;

/**
 * Created by none_ on 03/13/16.
 */
@Service
public class InitializationService {

    private ConfigurationService configurationService;
    private ConfigurationRepository configurationRepository;
    private UserRepository userRepository;

    @Autowired
    public void setConfigurationService(ConfigurationService configurationService) {
        this.configurationService = configurationService;
    }

    @Autowired
    public void setConfigurationRepository(ConfigurationRepository configurationRepository) {
        this.configurationRepository = configurationRepository;
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void initApp() {
        if (isInitialized()) {
            return;
        }

        Configuration initializedConfig = getInitializedConfig();
        initializedConfig.setValue(Boolean.TRUE.toString());
        configurationRepository.saveAndFlush(initializedConfig);
    }

    private boolean isInitialized() {
        try {
            return configurationService.getBoolean(ConfigurationKey.DB_INITIALIZED);
        } catch (IllegalArgumentException e) {
            return false;
        }
    }

    private Configuration getInitializedConfig() {
        Configuration config = configurationRepository.findByKey(ConfigurationKey.DB_INITIALIZED);
        return config != null ? config : new Configuration(ConfigurationKey.DB_INITIALIZED, ConfigurationType.BOOLEAN, Boolean.FALSE.toString());
    }
}
