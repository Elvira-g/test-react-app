import React from 'react'
import { HeroProducts } from './HeroProducts/HeroProducts'
import { Products } from './Products/Products'

type ProductsPagePropsType = {
    setProductId: (id:number) => void
}


export const ProductsPage: React.FC<ProductsPagePropsType> = ({setProductId}) => {

    return (
        <div>
            <HeroProducts />
            <Products setProductId={setProductId} />
        </div>
    )
}