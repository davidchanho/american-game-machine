import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroContainer = styled(motion.h1)`
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  width: 50%;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
