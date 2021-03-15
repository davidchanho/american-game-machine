export interface IFaqs {
  question: string;
  answer: string;
  eventKey?: string;
}

export type IStatus = "success" | "danger" | null;

export interface IService {
  icon: string;
  title: string;
  description: string;
}

export interface IProduct {
  label: string;
  variants: string[];
  description: string;
  games: string[];
  image: string;
}

export interface INews {
  title: string;
  date: string;
  body: string;
}

export interface IVisible {
  visible: boolean;
}