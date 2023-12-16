import React from 'react'
import { useAllProducts } from "../hooks/UseProducts";
import { LoaderComponent, ItemListContainer } from "../components";

export const Home = () => {
    const {products, loading, error} = useAllProducts(15);

    return (
      <div>
        {loading ? (
          <LoaderComponent />
        ) : error ? (
          <div>There was an error</div>
        ) : (
          <ItemListContainer products={products} />
        )}
      </div>
    );
};