import { ListGroup } from "react-bootstrap";
import styled from "styled-components";

export const Material = styled(ListGroup)`
  width: 100%;
  height: 80px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
`;

export const MaterialItem = styled(ListGroup.Item)`
  width: 80px;
  height: 80px;
  padding: 0;
  margin-right: 10px;
  border: none;
`;
