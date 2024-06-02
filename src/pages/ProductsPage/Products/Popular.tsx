import React, { useEffect, useState } from "react";
import { productsAPI } from "../../../api/productsApi";
import { Preloader } from "../../../components/Preloader/Preloader";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { ProductType } from "../../../types";

type PopularPropsType = {
  setProductId: React.Dispatch<React.SetStateAction<number>>;
};

export const Popular = ({ setProductId }: PopularPropsType) => {
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [isFetching, setIsFetching] = useState(true);

  // useEffect(() => {
  //     setIsFetching(true)
  //     axios
  //     .get('http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=2.5')
  //     .then((res) => {
  //         const newProducts: Array<ProductType> = []
  //         for (let i = 0; i < 3; i++) {
  //             newProducts.push(res.data[i])
  //         }
  //         setProducts(newProducts)
  //         setIsFetching(false)
  //     })
  // }, [])

  useEffect(() => {
    setIsFetching(true);
    getProducts();
  }, []);

  const getProducts = async () => {
    let data = await productsAPI.popular();
    const newProducts: Array<ProductType> = [];
    for (let i = 0; i < 3; i++) {
      newProducts.push(data[i]);
    }
    setProducts(newProducts);
    setIsFetching(false);
  };

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
