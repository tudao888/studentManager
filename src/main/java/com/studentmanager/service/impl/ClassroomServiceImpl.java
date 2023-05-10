package com.studentmanager.service.impl;

import com.studentmanager.domain.Classroom;
import com.studentmanager.repository.ClassroomRepository;
import com.studentmanager.service.ClassroomService;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Classroom}.
 */
@Service
@Transactional
public class ClassroomServiceImpl implements ClassroomService {

    private final Logger log = LoggerFactory.getLogger(ClassroomServiceImpl.class);

    private final ClassroomRepository classroomRepository;

    public ClassroomServiceImpl(ClassroomRepository classroomRepository) {
        this.classroomRepository = classroomRepository;
    }

    @Override
    public Classroom save(Classroom classroom) {
        log.debug("Request to save Classroom : {}", classroom);
        return classroomRepository.save(classroom);
    }

    @Override
    public Classroom update(Classroom classroom) {
        log.debug("Request to update Classroom : {}", classroom);
        return classroomRepository.save(classroom);
    }

    @Override
    public Optional<Classroom> partialUpdate(Classroom classroom) {
        log.debug("Request to partially update Classroom : {}", classroom);

        return classroomRepository
            .findById(classroom.getId())
            .map(existingClassroom -> {
                if (classroom.getNameOfSubject() != null) {
                    existingClassroom.setNameOfSubject(classroom.getNameOfSubject());
                }
                if (classroom.getLine() != null) {
                    existingClassroom.setLine(classroom.getLine());
                }

                return existingClassroom;
            })
            .map(classroomRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Classroom> findAll(Pageable pageable) {
        log.debug("Request to get all Classrooms");
        return classroomRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Classroom> findOne(Long id) {
        log.debug("Request to get Classroom : {}", id);
        return classroomRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Classroom : {}", id);
        classroomRepository.deleteById(id);
    }
}
