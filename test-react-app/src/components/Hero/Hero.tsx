import React from 'react'

type Props = {
    title: string
    span: string
    image?: string
}

export const Hero = ({title, span, image}: Props) => {

    const headerClassName = image ? 'site-header-image' : 'd-flex justify-content-center align-items-center'
    const headerAllClasses = ['site-header section-padding-img', headerClassName]

    return <header className={headerAllClasses.join(' ')}>
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
            {image && <img src={image} className="header-image img-fluid" alt=""/>}
            
        </header>
}