import { nanoid } from "nanoid";

const IMachine = "machines";
const IAccessories = "accessories";
type IType = typeof IMachine | typeof IAccessories;
const IStandups = "standups";
const IFishtables = "fishtables";
const IChairs = "chairs";
const IDesks = "desks";

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
      type: IMachine,
      category: IStandups,
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
      type: IMachine,
      category: IFishtables,
      label: "fish tables",
      materials: [],
      screens: ["65", "85"],
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
      color: ["red", "black"],
      image: "/img/chair.png",
    },
    {
      id: nanoid(),
      type: IAccessories,
      category: IChairs,
      label: "chair2",
      description: "",
      color: [],
      image: "/img/chair.png",
    },
    {
      id: nanoid(),
      type: IAccessories,
      category: IDesks,
      label: "desk",
      description: "",
      color: [],
      image: "/img/chair.png",
    },
  ],
};

export default productsState;

export const selectMachines = productsState.products.filter(
  (product) => product.type === IMachine
);

export const selectAccessories = productsState.products.filter(
  (product) => product.type === IAccessories
);

export const selectDesks = productsState.products.filter(
  (product) => product.category === IDesks
);

export const selectChairs = productsState.products.filter(
  (product) => product.category === IChairs
);

export const selectStandups = productsState.products.filter(
  (product) => product.category === IStandups
);

export const selectFishtables = productsState.products.filter(
  (product) => product.category === IFishtables
);
