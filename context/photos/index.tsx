export interface IPhoto {
  id: string;
  src: string;
  alt: string;
}

export interface IPhotoState {
  machines: IPhoto[];
  games: IPhoto[];
}

const photosState: IPhotoState = {
  machines: [
    {
      id: "full-lite-up",
      src: "/img/machines/fullMachine.webp",
      alt: "full image of stand up with lights turned on.",
    },
    {
      id: "bottom-lite-up",
      src: "/img/machines/bottomMachine.webp",
      alt: "closer look of stand up with lights turned on.",
    },
    {
      id: "logo-on-machine",
      src: "/img/machines/logoOnMachines.webp",
      alt: "close up of our logo on the stand ups.",
    },
    {
      id: "machines-assembly",
      src: "/img/machines/machinesAssembly.webp",
      alt: "a long line of our machines being assembled.",
    },
  ],
  games: [
    {
      id: "autumn-moon",
      src: "/img/games/autumn-moon.webp",
      alt: "full image of stand up with lights turned on.",
    },
    {
      id: "golden-century",
      src: "/img/games/golden-century.webp",
      alt: "closer look of stand up with lights turned on.",
    },
    {
      id: "panda-magic",
      src: "/img/games/panda-magic.webp",
      alt: "close up of our logo on the stand ups.",
    },
  ],
};

export default photosState;
