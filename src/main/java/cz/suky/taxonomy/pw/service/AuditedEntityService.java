package cz.suky.taxonomy.pw.service;

import cz.suky.taxonomy.pw.entity.AuditedEntity;
import cz.suky.taxonomy.pw.entity.User;

import java.util.List;

/**
 * Created by none_ on 03/14/16.
 */
public interface AuditedEntityService<Entity extends AuditedEntity> {

    Entity save(User user, Entity entity);

    Entity get(User user, Long id);

    List<Entity> getAll(User user);

    boolean delete(User user, Long id);
}
