export interface IFaqs {
  question: string;
  answer: string;
  eventKey?: string;
}

export type IStatus = "success" | "danger" | null;



export interface IVisible {
  visible: boolean;
}