import { Line } from 'app/entities/enumerations/line.model';

import { ICompany, NewCompany } from './company.model';

export const sampleWithRequiredData: ICompany = {
  id: 32440,
};

export const sampleWithPartialData: ICompany = {
  id: 23550,
  line: Line['EVENING'],
};

export const sampleWithFullData: ICompany = {
  id: 56879,
  name: 'zero Hawaii Handmade',
  line: Line['MORNING'],
};

export const sampleWithNewData: NewCompany = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
