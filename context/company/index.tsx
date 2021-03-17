interface ICompany {
  name: string;
  logo: string;
}

export interface ICompanyState {
  company: ICompany;
}

const companyState: ICompanyState = {
  company: {
    name: "American Game Machine",
    logo: "/svg/logo.svg",
  },
};

export default companyState;
