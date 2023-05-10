package com.studentmanager.service;

import com.studentmanager.domain.Classroom;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link Classroom}.
 */
public interface ClassroomService {
    /**
     * Save a classroom.
     *
     * @param classroom the entity to save.
     * @return the persisted entity.
     */
    Classroom save(Classroom classroom);

    /**
     * Updates a classroom.
     *
     * @param classroom the entity to update.
     * @return the persisted entity.
     */
    Classroom update(Classroom classroom);

    /**
     * Partially updates a classroom.
     *
     * @param classroom the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Classroom> partialUpdate(Classroom classroom);

    /**
     * Get all the classrooms.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Classroom> findAll(Pageable pageable);

    /**
     * Get the "id" classroom.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Classroom> findOne(Long id);

    /**
     * Delete the "id" classroom.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
