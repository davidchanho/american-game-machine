import _ from "lodash";
import { nanoid } from "nanoid";

export interface IPhoto {
  id: string;
  src: string;
}

export interface IPhotoState {
  photos: IPhoto[];
  loading: boolean;
  error: string;
}

const photosState: IPhotoState = {
  photos: [
    { id: nanoid(), src: "/img/fullMachineLiteUp.jpg" },
    { id: nanoid(), src: "/img/bottomMachineLiteUp.jpg" },
    { id: nanoid(), src: "/img/logoOnMachines.jpg" },
    { id: nanoid(), src: "/img/machinesAssembly.jpg" },
  ],
  loading: false,
  error: "",
};

export default photosState;

export const photos = photosState.photos;
