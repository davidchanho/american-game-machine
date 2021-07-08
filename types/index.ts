interface IDetails {
  screen: string;
  cabinet: string;
  dimensions: string;
  players: string;
  weight: string;
  voltage: string;
}

export interface ICategory {
  id: string;
  name: string;
  src: StaticImageData;
  link: string;
}

export interface IProduct extends ICategory {
  details: IDetails;
}

export interface IContact {
  id?: string;
  contact: string;
  info: string[];
  btnLabel: string;
  href?: string;
  rel: string;
}
