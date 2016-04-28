package cz.suky.pw.service;

import cz.suky.pw.entity.ConfigurationKey;

/**
 * Created by none_ on 03/13/16.
 */
public interface ConfigurationService {

    String getString(ConfigurationKey configurationKey);

    boolean getBoolean(ConfigurationKey configurationKey);

    int getInteger(ConfigurationKey configurationKey);
}
