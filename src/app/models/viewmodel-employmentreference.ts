import { ViewModelEmploymentPeriod } from "./viewmodel-employment-periode";

export interface ViewModelEmploymentReference {
  id: number;
    name: string;
    birthDate: string;
    employmentPeriods: ViewModelEmploymentPeriod[];
    responsibilities: string;
    conduct: string;
    closure: string;
    companyName: string;
  }