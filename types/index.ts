interface IDetails {
  screen: string;
  cabinet: string;
  dimensions: string;
  players: string;
  weight: string;
  voltage: string;
}

export interface IProduct {
  id: string;
  name: string;
  src: StaticImageData;
  details: IDetails;
  link: string;
}

export interface IContact {
  id?: string;
  contact: string;
  info: string[];
  btnLabel: string;
  href?: string;
  rel: string;
}

export interface ISolution {
  id?: string;
  title: string;
  description: string;
  Icon: JSX.Element;
}
