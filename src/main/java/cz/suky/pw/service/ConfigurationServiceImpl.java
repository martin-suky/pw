package cz.suky.pw.service;

import cz.suky.pw.entity.Configuration;
import cz.suky.pw.entity.ConfigurationKey;
import cz.suky.pw.entity.ConfigurationType;
import cz.suky.pw.repository.ConfigurationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by none_ on 03/13/16.
 */
@Service
public class ConfigurationServiceImpl implements ConfigurationService {

    private ConfigurationRepository configurationRepository;

    @Autowired
    public void setConfigurationRepository(ConfigurationRepository configurationRepository) {
        this.configurationRepository = configurationRepository;
    }

    @Override
    public String getString(ConfigurationKey configurationKey) {
        return findAndCastConfig(configurationKey, ConfigurationType.STRING);
    }

    @Override
    public boolean getBoolean(ConfigurationKey configurationKey) {
        return findAndCastConfig(configurationKey, ConfigurationType.BOOLEAN);
    }

    @Override
    public int getInteger(ConfigurationKey configurationKey) {
        return findAndCastConfig(configurationKey, ConfigurationType.INTEGER);
    }

    private <T extends Object> T findAndCastConfig(ConfigurationKey key, ConfigurationType type) {
        Configuration config = configurationRepository.findByKey(key);
        if (config == null) {
            throw new IllegalArgumentException("Configuration for key not found: " + key);
        }

        if (!type.equals(config.getType())) {
            throw new IllegalArgumentException("Invalid Type: for key=" + config.getKey() + " expected=" + type + " actual=" +config.getType());
        }

        switch (config.getType()) {
            case STRING:
                return (T) config.getValue();
            case BOOLEAN:
                return (T) Boolean.valueOf(config.getValue());
            case INTEGER:
                return (T) Integer.valueOf(config.getValue());
            default:
                throw new IllegalArgumentException("Type " + config.getType() + " not supported.");
        }
    }
}
