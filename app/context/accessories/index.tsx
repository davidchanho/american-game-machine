import { nanoid } from "nanoid";

export interface IAccessory {
  id: string;
  label: string;
  img: string;
}

export interface IAccessoriesState {
  accessories: IAccessory[];
}

const accessoriesState: IAccessoriesState = {
  accessories: [
    { id: nanoid(), label: "chair", img: "/img/chair.png" },
    { id: nanoid(), label: "chair2", img: "/img/chair.png" },
    { id: nanoid(), label: "chair3", img: "/img/chair.png" },
  ],
};

export default accessoriesState