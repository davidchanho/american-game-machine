import _ from "lodash";
import { nanoid } from "nanoid";
import { IProduct, IMachines, IAccessories, IChairs, IDesks, IFishtables, IStandups } from "../types";


export interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string;
}

const productsState: IProductState = {
  products: [
    {
      id: nanoid(),
      type: IMachines,
      category: IStandups,
      label: "stand ups",
      materials: ["/img/wood.jpg", "/img/metal.jpg"],
      screens: ["/svg/43screen.svg"],
      overview: {
        numberOfPlayers: "1",
      },
      description: "",
      games: [
        "/img/golden-century.jpg",
        "/img/autumn-moon.jpg",
        "/img/panda-magic.jpg",
      ],
      image: "/img/standups.png",
    },
    {
      id: nanoid(),
      type: IMachines,
      category: IFishtables,
      label: "fish tables",
      materials: [],
      screens: ["/svg/65screen.svg", "/svg/85screen.svg"],
      overview: {
        numberOfPlayers: "10",
      },
      description: "",
      games: [],
      image: "/img/fishtables.png",
    },
    {
      id: nanoid(),
      type: IAccessories,
      category: IChairs,
      label: "chair",
      description: "",
      colors: ["red", "black"],
      image: "/img/chair.png",
    },
    {
      id: nanoid(),
      type: IAccessories,
      category: IChairs,
      label: "chair2",
      description: "",
      colors: [],
      image: "/img/chair.png",
    },
    {
      id: nanoid(),
      type: IAccessories,
      category: IDesks,
      label: "desk",
      description: "",
      colors: [],
      image: "/img/chair.png",
    },
  ],
  loading: false,
  error: ''
};

export default productsState;

export const products = productsState.products;
