import React from 'react'
import img from '../../../../assets/img/header/businesspeople-meeting-office-working.jpg'

type HeroPropsType = {

}

export const Hero: React.FC<HeroPropsType> = (props) => {

    return (
        <div className="site-header section-padding-img site-header-image">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 header-info">
                            <h1>
                                <span className="d-block text-primary">Company</span>
                                <span className="d-block text-dark">Fashion</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <img src={img} className="header-image img-fluid" alt="" />
        </div>
    )
}