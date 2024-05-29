import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductType } from '../../../../../store/store'
import { ProductCard } from '../../../../ProductCard/ProductCard'

type NewArrivalsPropsType = {
    setProductId: (id: number) => void
}

export const NewArrivals: React.FC<NewArrivalsPropsType> = ({setProductId}) => {

    const [products, setProducts] = useState<Array<ProductType>>([])

    useEffect(() => {
        const fetchAllProducts = async () => {
            const res = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.5')
            const newProducts: Array<ProductType> = []
            for (let i = 0; i < 3; i++) {
                newProducts.push(res.data[i])
            }
            setProducts(newProducts)
        }
        fetchAllProducts()
    }, [])


    return (
        <div className="row">
            {products.map(product => <ProductCard product={product} key={product.id} setProductId={setProductId} />)}
        </div>  
    )
}