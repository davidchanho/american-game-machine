import { IPhoto } from "../types";

export interface IPhotoState {
  photos: IPhoto[];
  photo: IPhoto | {};
}

const photosState: IPhotoState = {
  photos: [
    { id: "full-lite-up", src: "/img/fullMachine.jpg" },
    { id: "bottom-lite-up", src: "/img/bottomMachine.jpg" },
    { id: "logo-on-machine", src: "/img/logoOnMachines.jpg" },
    { id: "machines-assembly", src: "/img/machinesAssembly.jpg" },
  ],
  photo: {},
};

export default photosState;
