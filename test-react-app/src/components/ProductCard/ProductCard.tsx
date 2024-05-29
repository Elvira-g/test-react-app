import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../store/store'

type ProductCartPropsType = {
    product: ProductType
    setProductId: (id: number )=> void
}

export const ProductCard: React.FC<ProductCartPropsType> = ({product, setProductId}) => {

    return(
        <div className="col-lg-4 col-12 mb-3">
            <div className="product-thumb">
                <a href="product-detail.html">
                    <img src={product.image_link} className="img-fluid product-image" alt=""/>
                </a>

                {product.brand !== null && <div className="product-top d-flex">
                    <span className="product-alert me-auto">{product.brand}</span>
                    <a href="#" className="bi-heart-fill product-icon"></a>
                </div>}


                <div className="product-info">
                        <h5 className="product-title mb-0">
                            <Link onClick={() => setProductId(product.id)} to="/product" className="product-title-link">{product.name}</Link>
                        </h5>
                        <div>
                            <p className="product-p">{product.product_type}</p>
                            <small className="product-price text-muted ms-auto mt-auto mb-5">$ {product.price}</small>
                        </div>
                            
                </div>
            </div>
        </div>
    )
}