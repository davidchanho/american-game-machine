import { nanoid } from "nanoid";

export interface IOverview {
  numberOfPlayers: string;
}

export interface IProduct {
  id: string;
  label: string;
  description: string;
  screens: string[];
  materials: string[];
  overview: IOverview;
  games: string[];
  image: string;
}

export interface IProductState {
  products: IProduct[];
}

const productsState: IProductState = {
  products: [
    {
      id: nanoid(),
      label: "stand ups",
      materials: ["wood", "metal"],
      screens: ["43"],
      overview: {
        numberOfPlayers: "1",
      },
      description: "",
      games: [],
      image: "/img/standups.png",
    },
    {
      id: nanoid(),
      label: "fish tables",
      materials: [],
      screens: ["65", "83"],
      overview: {
        numberOfPlayers: "10",
      },
      description: "",
      games: [],
      image: "/img/fishtables.png",
    },
  ],
};

export default productsState;
