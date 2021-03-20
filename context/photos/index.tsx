import { IPhoto } from "../types";

export interface IPhotoState {
  photos: IPhoto[];
  photo: IPhoto | {};
}

const photosState: IPhotoState = {
  photos: [
    {
      id: "full-lite-up",
      src: "/img/fullMachine.jpg",
      alt: "full image of stand up with lights turned on.",
    },
    {
      id: "bottom-lite-up",
      src: "/img/bottomMachine.jpg",
      alt: "closer look of stand up with lights turned on.",
    },
    {
      id: "logo-on-machine",
      src: "/img/logoOnMachines.jpg",
      alt: "close up of our logo on the stand ups.",
    },
    {
      id: "machines-assembly",
      src: "/img/machinesAssembly.jpg",
      alt: "a long line of our machines being assembled.",
    },
  ],
  photo: {},
};

export default photosState;
