import React from "react";
import { ProductType } from "../store/store";
import { Hero } from "./Hero/Hero";
import { ProductDetail } from "./ProductDetail/ProductDetail";
import { RelatedProducts } from "./RelatedProducts/RelatedProducts";

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
