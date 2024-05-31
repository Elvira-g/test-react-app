import React from "react";
import { ProductType } from "../store";
import { Hero } from "./Hero";
import { ProductDetail } from "./ProductDetail";
import { RelatedProducts } from "./RelatedProducts";

type Props = {
  product: ProductType | undefined;
  setProductId: React.Dispatch<React.SetStateAction<number>>;
};

export const ProductPage = ({ product, setProductId }: Props) => {
  return (
    <div>
      <Hero />
      <ProductDetail product={product} />
      <RelatedProducts setProductId={setProductId} />
    </div>
  );
};
