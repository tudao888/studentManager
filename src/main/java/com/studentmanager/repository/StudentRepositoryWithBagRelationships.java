package com.studentmanager.repository;

import com.studentmanager.domain.Student;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

public interface StudentRepositoryWithBagRelationships {
    Optional<Student> fetchBagRelationships(Optional<Student> student);

    List<Student> fetchBagRelationships(List<Student> students);

    Page<Student> fetchBagRelationships(Page<Student> students);
}
