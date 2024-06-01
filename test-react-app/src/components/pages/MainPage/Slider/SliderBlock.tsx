import React from 'react'
import slide1 from '../../../../assets/img/slideshow/medium-shot-business-women-high-five.jpeg'
import slide2 from '../../../../assets/img/slideshow/team-meeting-renewable-energy-project.jpeg'
import slide3 from '../../../../assets/img/slideshow/two-business-partners-working-together-office-computer.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Slide } from './Slide';
import { SlideType } from '../../../../types/types';

type SliderPropsType = {

}

const slides: Array<SlideType> = [
    {
        title: 'Cool Fashion',
        desc: 'Little fashion template comes with total 8 HTML pages provided by Tooplate website',
        image: slide1,
        link: '#'
    },
    {
        title: 'New Design',
        desc: 'Little fashion template comes with total 8 HTML pages provided by Tooplate website',
        image: slide2,
        link: '#'
    },
    {
        title: 'Talk to us',
        desc: 'Little fashion template comes with total 8 HTML pages provided by Tooplate website',
        image: slide3,
        link: '#'
    }
]

export const SliderBlock = (props: SliderPropsType) => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slick-slideshow'
    };

    return(
        <section>
            <Slider {...settings}>

                {slides.map((slide, i) => <Slide key={i} title={slide.title} desc={slide.desc} image={slide.image} link={slide.link} /> )}
                
            </Slider>
        </section>
        
    )
}