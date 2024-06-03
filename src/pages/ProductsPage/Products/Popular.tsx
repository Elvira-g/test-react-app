import React, { useEffect, useState } from "react";
import { productsAPI } from "../../../api/productsApi";
import { Preloader } from "../../../components/Preloader/Preloader";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { ProductType } from "../../../types";

type PopularPropsType = {
  setProductId: React.Dispatch<React.SetStateAction<number>>;
};

const getProducts = async () => {
  let data = await productsAPI.popular();
  const newProducts: Array<ProductType> = [];
  for (let i = 0; i < 3; i++) {
    newProducts.push(data[i]);
  }
  return newProducts;
};

export const Popular = ({ setProductId }: PopularPropsType) => {
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    getProducts().then((data) => setProducts(data));
    setIsFetching(false);
  }, []);

  return (
    <div className="row">
      {isFetching ? <Preloader /> : null}
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          setProductId={setProductId}
        />
      ))}
    </div>
  );
};
