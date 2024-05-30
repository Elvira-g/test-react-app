import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Hero } from '../components/Hero/Hero'
import { ProductType } from '../store/store'
import { ProductDetail } from './ProductDetail/ProductDetail'
import { RelatedProducts } from './RelatedProducts/RelatedProducts'

type ProductPagePropsType = {
    product: ProductType
    setProductId: (id: number) => void
}

export const ProductPage: React.FC<ProductPagePropsType> = ({product, setProductId}) => {

    return (
        <div>
            <Hero title='We provide you' span='Fashionable Stuffs'/>
            <ProductDetail product={product} />
            <RelatedProducts setProductId={setProductId} />
        </div>
        
    )
}