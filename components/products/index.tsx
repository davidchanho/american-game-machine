import React from 'react'
import { filterProducts, IMachines } from '../../context';
import ProductItem from './ProductItem';

function Products() {
    const machines = filterProducts("type", IMachines);

    return (
      <div>
        {machines.map((product) => {
          return (
            <ProductItem key={`product-item-${product.label}`} {...product} />
          );
        })}
      </div>
    );
}

export default Products
