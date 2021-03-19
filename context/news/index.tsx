import { nanoid } from "nanoid";

export interface INews {
  id: string;
  title: string;
  date: string;
  body: string;
}

export interface INewsState {
  news: INews[];
  loadingNews: boolean;
}

const newsState: INewsState = {
  news: [
    {
      id: nanoid(),
      title: "Website Launched!",
      date: "March 14, 2021",
      body:
        "We are proud to serve The Triangle area, Charlotte Metropolitan Area and beyond!",
    },
  ],
  loadingNews: false,
};

export default newsState;
