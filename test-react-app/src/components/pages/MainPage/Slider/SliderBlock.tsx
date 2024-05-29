import React from 'react'
import slide1 from '../../../../assets/img/slideshow/medium-shot-business-women-high-five.jpeg'
import slide2 from '../../../../assets/img/slideshow/team-meeting-renewable-energy-project.jpeg'
import slide3 from '../../../../assets/img/slideshow/two-business-partners-working-together-office-computer.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type SliderPropsType = {

}


type SlideType = {
    title: string
    desc: string
    image: string
    link: string
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


const Slide: React.FC<SlideType> = ({title, desc, image, link}) => {

    return(
        <div className="slick-custom">
            <img src={image} className="img-fluid" alt=""/>

            <div className="slick-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-10">
                            <h1 className="slick-title">{title}</h1>

                            <p className="lead text-white mt-lg-3 mb-lg-5">{desc}</p>

                            <a href={link} className="btn custom-btn">Learn more about us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SliderBlock: React.FC<SliderPropsType> = (props) => {

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