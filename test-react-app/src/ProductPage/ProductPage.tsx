import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductType } from '../store/store'
import { Hero } from './Hero/Hero'
import { ProductDetail } from './ProductDetail/ProductDetail'
import { RelatedProducts } from './RelatedProducts/RelatedProducts'

type ProductPagePropsType = {
    product: ProductType
    setProductId: (id: number) => void
}

export const ProductPage: React.FC<ProductPagePropsType> = ({product, setProductId}) => {

    return (
        <div>
            <Hero />
            <ProductDetail product={product} />
            <RelatedProducts setProductId={setProductId} />
        </div>
        
    )
}