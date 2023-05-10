import dayjs from 'dayjs/esm';
import { ICompany } from 'app/entities/company/company.model';

export interface IEmployee {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  dateOfBirth?: dayjs.Dayjs | null;
  companies?: Pick<ICompany, 'id'>[] | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
