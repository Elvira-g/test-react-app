import React from 'react'

type Props = {
    title: string
    span: string
}

export const Hero = ({title, span}: Props) => {

    return <header className="site-header section-padding d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">

                    <div className="col-lg-10 col-12">
                        <h1>
                            <span className="d-block text-primary">{title}</span>
                            <span className="d-block text-dark">{span}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
}