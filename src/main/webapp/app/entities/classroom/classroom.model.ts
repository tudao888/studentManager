import { IStudent } from 'app/entities/student/student.model';
import { Line } from 'app/entities/enumerations/line.model';

export interface IClassroom {
  id: number;
  nameOfSubject?: string | null;
  line?: Line | null;
  students?: Pick<IStudent, 'id'>[] | null;
}

export type NewClassroom = Omit<IClassroom, 'id'> & { id: null };
