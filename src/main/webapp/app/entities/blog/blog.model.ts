import { ICategory } from 'app/entities/category/category.model';

export interface IBlog {
  id: number;
  title?: string | null;
  description?: string | null;
  category?: Pick<ICategory, 'id'> | null;
}

export type NewBlog = Omit<IBlog, 'id'> & { id: null };
