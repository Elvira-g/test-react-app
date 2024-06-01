import React from 'react'
import { Link } from 'react-router-dom'
import { SlideType } from '../../../../types/types'

export const Slide = ({title, desc, image, link}: SlideType) => {

    return(
        <div className="slick-custom">
            <img src={image} className="img-fluid" alt=""/>

            <div className="slick-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-10">
                            <h1 className="slick-title">{title}</h1>

                            <p className="lead text-white mt-lg-3 mb-lg-5">{desc}</p>

                            <Link to={link} className="btn custom-btn">Learn more about us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}