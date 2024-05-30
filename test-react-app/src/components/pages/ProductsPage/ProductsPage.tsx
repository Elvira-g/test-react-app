import React from 'react'
import { Hero } from '../../Hero/Hero'
import { Products } from './Products/Products'

type ProductsPagePropsType = {
    setProductId: (id:number) => void
}


export const ProductsPage: React.FC<ProductsPagePropsType> = ({setProductId}) => {

    return (
        <div>
            <Hero title='Choose your' span='favorite stuffs' />
            <Products setProductId={setProductId} />
        </div>
    )
}