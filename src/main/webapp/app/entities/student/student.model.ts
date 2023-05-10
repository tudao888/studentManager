import dayjs from 'dayjs/esm';
import { IClassroom } from 'app/entities/classroom/classroom.model';

export interface IStudent {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  dateOfBirth?: dayjs.Dayjs | null;
  classrooms?: Pick<IClassroom, 'id'>[] | null;
}

export type NewStudent = Omit<IStudent, 'id'> & { id: null };
