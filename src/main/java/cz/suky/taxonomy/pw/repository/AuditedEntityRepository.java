package cz.suky.taxonomy.pw.repository;

import cz.suky.taxonomy.pw.entity.AuditedEntity;

/**
 * Created by none_ on 03/14/16.
 */
public interface AuditedEntityRepository<Entity extends AuditedEntity> extends AbstractEntityRepository<Entity> {
}
