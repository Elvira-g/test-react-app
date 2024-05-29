import React from 'react'
import { About } from './About/About'
import { FeatureProducts } from './FeaturedProduct/FeatureProducts'
import { FrontProduct } from './FrontProduct/FrontProduct'
import { SliderBlock } from './Slider/SliderBlock'
type MainPagePropsType = {
    setProductId: (id:number) => void
}

export const MainPage: React.FC<MainPagePropsType> = ({setProductId}) => {

    return (
        <div>
            <SliderBlock/>
            <About />
            <FrontProduct />
            <FeatureProducts setProductId={setProductId} />
        </div>
    )
}