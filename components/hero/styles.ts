import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";
import { breakpoints } from "../../utils";

export const HeroContainer = styled(Jumbotron)`
         background-color: ${(props) => props.theme.colors.primary};
         color: white;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 0 0 50px 50px;

         h3 {
           margin: 0;
           width: 18%;

           span {
             font-weight: bold;
             text-decoration: underline;
           }

           mark {
             background-color: ${(props) => props.theme.colors.accent};
           }
         }

         img {
           width: 350px;
         }

         @media (max-width: ${breakpoints["md"]}) {
           flex-direction: column;

           h3 {
             width: 50%;
             margin-bottom: 20px;
           }
         }
       `;
