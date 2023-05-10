import dayjs from 'dayjs/esm';

import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 23105,
};

export const sampleWithPartialData: IStudent = {
  id: 45307,
  firstName: 'Emilie',
  lastName: 'Walker',
  phone: '461.936.8030',
  dateOfBirth: dayjs('2023-05-07T09:28'),
};

export const sampleWithFullData: IStudent = {
  id: 82317,
  firstName: 'Marley',
  lastName: 'Hickle',
  email: 'Katelynn_Dickinson@hotmail.com',
  phone: '833-555-4577',
  dateOfBirth: dayjs('2023-05-08T03:07'),
};

export const sampleWithNewData: NewStudent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
