import React from "react";
import { NewArrivals } from "./NewArrivals";
import { Popular } from "./Popular";

type ProductsPropsType = {
  setProductId: React.Dispatch<React.SetStateAction<number>>;
};

export const Products = ({ setProductId }: ProductsPropsType) => {
  return (
    <section className="products section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5">New Arrivals</h2>
          </div>
          <NewArrivals setProductId={setProductId} />

          <div className="col-12">
            <h2 className="mb-5">Popular</h2>
          </div>

          <Popular setProductId={setProductId} />
        </div>
      </div>
    </section>
  );
};
