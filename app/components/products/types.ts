export interface GamesProps {
  games: string[];
}

export interface VariantsProps {
  variants: string[];
}

export interface VariantsItemProps {
  variant: string;
}

export interface IProduct {
  label: string;
  variants: string[];
  description: string;
  games: string[];
  image: string;
}
