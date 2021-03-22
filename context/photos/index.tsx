import { IPhoto } from "../types";

export interface IPhotoState {
  photos: IPhoto[];
}

const photosState: IPhotoState = {
  photos: [
    {
      id: "full-lite-up",
      src: "/img/fullMachine.webp",
      alt: "full image of stand up with lights turned on.",
    },
    {
      id: "bottom-lite-up",
      src: "/img/bottomMachine.webp",
      alt: "closer look of stand up with lights turned on.",
    },
    {
      id: "logo-on-machine",
      src: "/img/logoOnMachines.webp",
      alt: "close up of our logo on the stand ups.",
    },
    {
      id: "machines-assembly",
      src: "/img/machinesAssembly.webp",
      alt: "a long line of our machines being assembled.",
    },
  ],
};

export default photosState;
