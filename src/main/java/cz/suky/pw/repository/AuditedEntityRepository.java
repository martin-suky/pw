package cz.suky.pw.repository;

import cz.suky.pw.entity.AuditedEntity;

/**
 * Created by none_ on 03/14/16.
 */
public interface AuditedEntityRepository<Entity extends AuditedEntity> extends AbstractEntityRepository<Entity> {
}
