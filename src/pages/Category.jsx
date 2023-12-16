import React from "react";
import { useAllProductsByFilter } from "../hooks/UseProducts";
import { ItemListContainer } from "../components/ItemListContainer";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const { products } = useAllProductsByFilter("products", categoryId, "category");


  return <ItemListContainer products={products} />;
};

export default Category;