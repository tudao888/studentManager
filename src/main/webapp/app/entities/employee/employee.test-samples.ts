import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
};

export const sampleWithPartialData: IEmployee = {
  id: 37115,
  lastName: 'Rogahn',
  email: 'Marilie_Mann@hotmail.com',
  dateOfBirth: dayjs('2023-05-07T18:23'),
};

export const sampleWithFullData: IEmployee = {
  id: 28729,
  firstName: 'Armand',
  lastName: 'Connelly',
  email: 'Zechariah86@yahoo.com',
  phone: '493-644-9231 x823',
  dateOfBirth: dayjs('2023-05-07T11:06'),
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
