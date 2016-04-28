package cz.suky.pw.repository;

import cz.suky.pw.entity.Configuration;
import cz.suky.pw.entity.ConfigurationKey;

/**
 * Created by none_ on 03/13/16.
 */
public interface ConfigurationRepository extends AbstractEntityRepository<Configuration> {

    Configuration findByKey(ConfigurationKey key);
}
