import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { ProductType } from "../../types";
import { ProductDetail } from "./ProductDetail/ProductDetail";
import { RelatedProducts } from "./RelatedProducts/RelatedProducts";

type Props = {
  product: ProductType | undefined;
  setProductId: React.Dispatch<React.SetStateAction<number>>;
};

export const ProductPage = ({ product, setProductId }: Props) => {
  return (
    <div>
      <Hero title="We provide you" span="Fashionable Stuffs" />
      <ProductDetail product={product} />
      <RelatedProducts setProductId={setProductId} />
    </div>
  );
};
