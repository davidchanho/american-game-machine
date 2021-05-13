import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  padding: 15px;
  background-color: inherit;
  color: ${(props) => props.theme.colors.white};
  .card-title {
    text-transform: capitalize;
    margin-top: 5px;
  }

  .card-body {
    padding: 0;
    height: 120px;
  }
`;
