import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 53708,
};

export const sampleWithPartialData: IBlog = {
  id: 62437,
  title: 'compressing object-oriented e-services',
  description: 'Balboa backing Concrete',
};

export const sampleWithFullData: IBlog = {
  id: 19002,
  title: 'Designer',
  description: 'Borders bypassing',
};

export const sampleWithNewData: NewBlog = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
