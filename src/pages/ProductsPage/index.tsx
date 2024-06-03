import React from "react";
import { Hero } from "../../components/Hero";
import { Products } from "./Products/Products";

type ProductsPagePropsType = {
  setProductId: React.Dispatch<React.SetStateAction<number>>;
};

export const ProductsPage = ({ setProductId }: ProductsPagePropsType) => {
  return (
    <div>
      <Hero title="Choose your" span="favorite stuffs" />
      <Products setProductId={setProductId} />
    </div>
  );
};
