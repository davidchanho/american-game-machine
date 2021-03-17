import { Card } from "react-bootstrap";
import { INews } from "../../../context/news";

import styled from 'styled-components'

const Item = styled(Card)`
  padding: 10px 20px;
  small {
    margin-bottom: 10px;
  }
`

function NewsItem({ title, date, body }: INews) {
  return (
    <Item className="border">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{body}</p>
    </Item>
  );
}

export default NewsItem;
