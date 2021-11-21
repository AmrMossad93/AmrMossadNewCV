export interface IResume {
  position: string;
  dateOfEmployee: string;
  companyName: string;
  details: IResumeCompanyDetails;
  icon: string;
  color: string;
  jobRequirements: string[];
}
export interface IResumeCompanyDetails{
  companyURL: string;
  myRole: string;
  aboutCompany: string;
}
