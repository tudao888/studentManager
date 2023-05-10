import { IEmployee } from 'app/entities/employee/employee.model';
import { Line } from 'app/entities/enumerations/line.model';

export interface ICompany {
  id: number;
  name?: string | null;
  line?: Line | null;
  employees?: Pick<IEmployee, 'id'>[] | null;
}

export type NewCompany = Omit<ICompany, 'id'> & { id: null };
