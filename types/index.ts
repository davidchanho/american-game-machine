interface IContent {
  id: string;
  src: StaticImageData;
  desc: string;
}

interface IFeature {
  id: string;
  name: string;
  list: IContent[]
};

export interface ICategory extends IContent {
  name: string;
  features: IFeature[];
}

export interface IContact {
  id?: string;
  contact: string;
  info: string[];
  btnLabel: string;
  href?: string;
  rel: string;
}
