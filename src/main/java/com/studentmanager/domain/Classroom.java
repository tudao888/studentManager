package com.studentmanager.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.studentmanager.domain.enumeration.Line;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Classroom.
 */
@Entity
@Table(name = "classroom")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Classroom implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name_of_subject")
    private String nameOfSubject;

    @Enumerated(EnumType.STRING)
    @Column(name = "line")
    private Line line;

    @ManyToMany(mappedBy = "classrooms")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "classrooms" }, allowSetters = true)
    private Set<Student> students = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Classroom id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameOfSubject() {
        return this.nameOfSubject;
    }

    public Classroom nameOfSubject(String nameOfSubject) {
        this.setNameOfSubject(nameOfSubject);
        return this;
    }

    public void setNameOfSubject(String nameOfSubject) {
        this.nameOfSubject = nameOfSubject;
    }

    public Line getLine() {
        return this.line;
    }

    public Classroom line(Line line) {
        this.setLine(line);
        return this;
    }

    public void setLine(Line line) {
        this.line = line;
    }

    public Set<Student> getStudents() {
        return this.students;
    }

    public void setStudents(Set<Student> students) {
        if (this.students != null) {
            this.students.forEach(i -> i.removeClassroom(this));
        }
        if (students != null) {
            students.forEach(i -> i.addClassroom(this));
        }
        this.students = students;
    }

    public Classroom students(Set<Student> students) {
        this.setStudents(students);
        return this;
    }

    public Classroom addStudent(Student student) {
        this.students.add(student);
        student.getClassrooms().add(this);
        return this;
    }

    public Classroom removeStudent(Student student) {
        this.students.remove(student);
        student.getClassrooms().remove(this);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Classroom)) {
            return false;
        }
        return id != null && id.equals(((Classroom) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Classroom{" +
            "id=" + getId() +
            ", nameOfSubject='" + getNameOfSubject() + "'" +
            ", line='" + getLine() + "'" +
            "}";
    }
}
