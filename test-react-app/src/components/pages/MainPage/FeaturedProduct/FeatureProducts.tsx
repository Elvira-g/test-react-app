import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../../../store";
import { ProductCard } from "../../../ProductCard/ProductCard";

type ProductsPropsType = {
  setProductId: (id: number) => void;
};

export const FeatureProducts: React.FC<ProductsPropsType> = ({
  setProductId,
}) => {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const res = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&rating_greater_than=3.9&rating_less_than=4.1"
      );
      setProducts(res.data);
    };
    fetchAllProducts();
  }, []);

  return (
    <section className="featured-product section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-5">Featured Products</h2>
          </div>

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
