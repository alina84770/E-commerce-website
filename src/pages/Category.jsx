import React from 'react';
import ProductCategory from '../components/productCategory/ProductCategory';

const Category = (Props) => {
  return (
    <div>
      <ProductCategory category={Props.category} banner={Props.banner} />
    </div>
  )
}

export default Category;

