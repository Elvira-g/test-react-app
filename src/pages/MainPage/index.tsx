import React from 'react'
import { About } from './About/About'
import { FeatureProducts } from './FeaturedProduct/FeatureProducts'
import { FrontProduct } from './FrontProduct/FrontProduct'
import { SliderBlock } from './Slider/SliderBlock'
type MainPagePropsType = {
    setProductId: React.Dispatch<React.SetStateAction<number>>
}

export const MainPage = ({setProductId}: MainPagePropsType) => {

    return (
        <div>
            <SliderBlock/>
            <About />
            <FrontProduct />
            <FeatureProducts setProductId={setProductId} />
        </div>
    )
}