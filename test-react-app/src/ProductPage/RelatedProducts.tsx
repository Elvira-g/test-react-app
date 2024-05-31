import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../api";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { ProductType } from "../store";

type RelatedProductsPropsType = {
  setProductId: (id: number) => void;
};

export const RelatedProducts: React.FC<RelatedProductsPropsType> = ({
  setProductId,
}) => {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    fetchAllProducts().then((payload) => setProducts(payload));
  }, []);

  return (
    <section className="related-product section-padding border-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-5">You might also like</h3>
          </div>

          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              setProductId={setProductId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
