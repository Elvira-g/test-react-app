import React from 'react'

type HeroPropsType = {

}

export const Hero: React.FC<HeroPropsType> = (props) => {

    return (
        <header className="site-header section-padding d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">

                     <div className="col-lg-10 col-12">
                        <h1>
                            <span className="d-block text-primary">We provide you</span>
                            <span className="d-block text-dark">Fashionable Stuffs</span>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}