import { useState } from "react";
import { useAppContext } from "../../../context";

const useCatalog = () => {
  const {
    state: { products },
  } = useAppContext();

  const [filter, setFilter] = useState("");

  const onClick = (filter: string) => {
    setFilter(filter);
  };

  const filteredProducts = products.filter((product) => {
    if (!filter) {
      return true;
    }
    if (filter !== product.category && filter !== product.type) {
      return false;
    }
    return true;
  });

  return { onClick, filteredProducts };
};

export default useCatalog;
