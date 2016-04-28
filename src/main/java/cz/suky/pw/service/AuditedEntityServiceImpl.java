package cz.suky.pw.service;

import cz.suky.pw.repository.AuditedEntityRepository;
import cz.suky.pw.entity.AuditedEntity;
import cz.suky.pw.entity.User;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Created by none_ on 03/14/16.
 */
public abstract class AuditedEntityServiceImpl<Entity extends AuditedEntity> implements AuditedEntityService<Entity> {

    @Transactional
    @Override
    public Entity save(final User user, final Entity entity) {
        final Entity result;
        if (entity.getId() == null) {
            result = createEntity(user, entity);
        } else {
            result = updateEntity(user, entity);
        }
        return result;
    }

    @Transactional(readOnly = true)
    @Override
    public Entity get(User user, Long id) {
        return getRepository().findOne(id);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Entity> getAll(User user) {
        return getRepository().findAll();
    }

    @Override
    public boolean delete(User user, Long id) {
        return false;
    }

    protected abstract AuditedEntityRepository<Entity> getRepository();

    protected abstract Entity safeMap(Entity source, Entity target);

    protected abstract Entity newEntity();

    protected void updateAudit(User user, Entity entity) {
        if (entity.getId() == null) {
            entity.setCreated(LocalDateTime.now());
            entity.setCreatedBy(user);
        }
        entity.setUpdated(LocalDateTime.now());
        entity.setUpdatedBy(user);
    }

    private Entity createEntity(User user, Entity entity) {
        final Entity toSave = safeMap(entity, newEntity());
        updateAudit(user, toSave);
        return getRepository().save(toSave);
    }

    private Entity updateEntity(User user, Entity entity) {
        Entity old = getRepository().findOne(entity.getId());
        if (old == null) {
            throw new IllegalArgumentException("Entity with ID=" + entity.getId() + " not found");
        }
        final Entity toSave = safeMap(entity, old);
        updateAudit(user, toSave);
        return getRepository().save(toSave);
    }
}
