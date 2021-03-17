import { nanoid } from "nanoid";

export interface INews {
  id: string;
  title: string;
  date: string;
  body: string;
}

interface INewsState {
  news: INews[];
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
};

export default newsState;
