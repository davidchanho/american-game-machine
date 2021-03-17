import { nanoid } from "nanoid";

export interface IOverview {
  numberOfPlayers: string;
}

export interface IProduct {
  id: string;
  type: "machine" | "accessories";
  label: string;
  description: string;
  screens?: string[];
  materials?: string[];
  color?: string[];
  games?: string[];
  overview?: IOverview;
  image: string;
}

export interface IProductState {
  products: IProduct[];
}

const productsState: IProductState = {
  products: [
    {
      id: nanoid(),
      type: "machine",
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
      type: "machine",
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
    {
      id: nanoid(),
      type: "accessories",
      label: "chair",
      description: "",
      color: ["red", "black"],
      image: "/img/chair.png",
    },
    {
      id: nanoid(),
      type: "accessories",
      label: "chair2",
      description: "",
      color: [],
      image: "/img/chair.png",
    },
    {
      id: nanoid(),
      type: "accessories",
      label: "chair3",
      description: "",
      color: [],
      image: "/img/chair.png",
    },
  ],
};

export default productsState;
