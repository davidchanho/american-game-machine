export interface ICategory {
  id: string;
  name: string;
  src: StaticImageData;
  desc: string;
}

export interface IContact {
  id?: string;
  contact: string;
  info: string[];
  btnLabel: string;
  href?: string;
  rel: string;
}
