package cz.suky.taxonomy.pw.repository;

import cz.suky.taxonomy.pw.entity.Configuration;
import cz.suky.taxonomy.pw.entity.ConfigurationKey;

/**
 * Created by none_ on 03/13/16.
 */
public interface ConfigurationRepository extends AbstractEntityRepository<Configuration> {

    Configuration findByKey(ConfigurationKey key);
}
