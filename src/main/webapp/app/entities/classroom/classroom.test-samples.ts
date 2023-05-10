import { Line } from 'app/entities/enumerations/line.model';

import { IClassroom, NewClassroom } from './classroom.model';

export const sampleWithRequiredData: IClassroom = {
  id: 84316,
};

export const sampleWithPartialData: IClassroom = {
  id: 14457,
};

export const sampleWithFullData: IClassroom = {
  id: 78270,
  nameOfSubject: 'Account Dobra Credit',
  line: Line['MORNING'],
};

export const sampleWithNewData: NewClassroom = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
