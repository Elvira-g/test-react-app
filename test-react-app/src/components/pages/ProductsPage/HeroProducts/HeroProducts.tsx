import React from 'react'

type HeroPropsType = {

}

export const HeroProducts: React.FC<HeroPropsType> = (props) => {

    return (
        <header className="site-header section-padding d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12">
                            <h1>
                                <span className="d-block text-primary">Choose your</span>
                                <span className="d-block text-dark">favorite stuffs</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
    )
}