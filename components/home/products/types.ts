interface IDetails {
  screen: string;
  cabinet: string;
  dimensions: string;
  players: string;
}

export interface IProduct {
  id?: string;
  name: string;
  src: string;
  details: IDetails;
}
