import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productsAPI } from "../../../api/productsApi";
import { Preloader } from "../../../components/Preloader/Preloader";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { ProductType } from "../../../types";

type ProductsPropsType = {
  setProductId: React.Dispatch<React.SetStateAction<number>>;
};

const getProducts = async () => {
  let data = await productsAPI.featured();
  const newProducts: Array<ProductType> = [];
  for (let i = 0; i < 9; i++) {
    newProducts.push(data[i]);
  }
  return newProducts;
};

export const FeatureProducts = ({ setProductId }: ProductsPropsType) => {
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    getProducts().then((data) => setProducts(data));
    setIsFetching(false);
  }, []);

  return (
    <section className="featured-product section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-5">Featured Products</h2>
          </div>
          {isFetching ? <Preloader /> : null}
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              setProductId={setProductId}
            />
          ))}

          <div className="col-12 text-center">
            <Link to="/products" className="view-all">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
