import { CardProps, ImageProps } from "react-bootstrap";

export interface Props extends CardProps, ImageProps {
  description: string;
}
