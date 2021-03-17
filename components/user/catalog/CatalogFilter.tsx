import React from "react";
import { Form, ListGroupItem } from "react-bootstrap";
import { filterProductsByKey } from "../../../context";

interface Props {
  catalogKey: string;
  handleClick: (filter: string) => void;
}

function CatalogFilter({ catalogKey, handleClick }: Props) {
  return (
    <ListGroupItem>
      <Form>
        <Form.Label className="text-capitalize">{catalogKey}</Form.Label>
        <Form.Group>
          {filterProductsByKey(catalogKey).map((item) => (
            <Form.Check
              custom
              inline
              label={item}
              type="radio"
              name={`${catalogKey}`}
              id={`${catalogKey}-${item}`}
              onClick={() => handleClick(item)}
            />
          ))}
        </Form.Group>
      </Form>
    </ListGroupItem>
  );
}

export default CatalogFilter;
