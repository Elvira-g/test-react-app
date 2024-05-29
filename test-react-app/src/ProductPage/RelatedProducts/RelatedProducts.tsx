import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { ProductType } from '../../store/store'

type RelatedProductsPropsType = {
    setProductId: (id: number) => void
}

export const RelatedProducts: React.FC<RelatedProductsPropsType> = ({setProductId}) => {

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
        <section className="related-product section-padding border-top">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h3 className="mb-5">You might also like</h3>
                        </div>

                        {products.map(product => <ProductCard product={product} key={product.id} setProductId={setProductId} />)}
                        

                    </div>
                </div>
            </section>
    )
}