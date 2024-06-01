import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { productsAPI } from '../../../../../api/productsApi'
import { ProductType } from '../../../../../types/types'
import { Preloader } from '../../../../Preloader/Preloader'
import { ProductCard } from '../../../../ProductCard/ProductCard'

type NewArrivalsPropsType = {
    setProductId: React.Dispatch<React.SetStateAction<number>>
}

export const NewArrivals = ({setProductId}: NewArrivalsPropsType) => {

    const [products, setProducts] = useState<Array<ProductType>>([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        setIsFetching(true)
        getProducts()
    }, [])

    const getProducts = async () => {
        let data = await productsAPI.newArrival()
        const newProducts: Array<ProductType> = []
        for (let i = 0; i < 3; i++) {
                newProducts.push(data[i])
        }
        setProducts(newProducts)
        setIsFetching(false)
    }


    return (
        <div className="row">
            {isFetching ? <Preloader /> : null}
            {products.map(product => <ProductCard product={product} key={product.id} setProductId={setProductId} />)}
        </div>  
    )
}