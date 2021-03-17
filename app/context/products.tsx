import { nanoid } from "nanoid";

export interface IOverview {
  numberOfPlayers: string;
}

export interface IProduct {
  id: string;
  label: string;
  description: string;
  screenSize: string[];
  material: string[];
  overview: IOverview;
  games: string[];
  image: string;
}

interface IProductState {
  products: IProduct[];
}

const productsState: IProductState = {
  products: [
    {
      id: nanoid(),
      label: "stand ups",
      material: ["wood", "metal"],
      screenSize: ["43"],
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
      material: [],
      screenSize: ["65", "83"],
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
