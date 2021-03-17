interface ICompanyInfo {
  name: string;
  logo: string;
}

interface ICompanyState {
  company: ICompanyInfo;
}

const companyState: ICompanyState = {
  company: {
    name: "American Game Machine",
    logo: "/svg/logo.svg",
  },
};

export default companyState;
