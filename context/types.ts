export interface ILink {
  href: string;
  label: string;
}

export interface IService {
  src: string;
  title: string;
  description: string;
}

export interface IPhoto {
  id: string;
  src: string;
}

export const IMachines = "machines";
export const IAccessories = "accessories";
type IType = typeof IMachines | typeof IAccessories;
export const IStandups = "standups";
export const IFishtables = "fishtables";
export const IChairs = "chairs";
export const IDesks = "desks";

type ICategory =
  | typeof IStandups
  | typeof IFishtables
  | typeof IChairs
  | typeof IDesks;

export interface IOverview {
  numberOfPlayers: string;
}

export interface IProduct {
  id: string;
  type: IType;
  category?: ICategory;
  label: string;
  description: string;
  screens?: string[];
  materials?: string[];
  colors?: string[];
  games?: string[];
  overview?: IOverview;
  image: string;
}
