import React from 'react'
import img1 from '../../../../assets/img/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg'
import img2 from '../../../../assets/img/people/beautiful-woman-face-portrait-brown-background.jpeg'
import img3 from '../../../../assets/img/people/portrait-british-woman.jpeg'
import img4 from '../../../../assets/img/people/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg'
import Slider from 'react-slick'

type PropsType = {
    
}

type SlidePropsType = {
    slide: TestimonialType
}

type TestimonialType = {
    id: number
    name: string
    img: string
    company: string
    text: string
}

const testimonials: Array<TestimonialType> = [
    {
        id: 1,
        name: 'George',
        img: img1,
        company: 'Digital Art Fashion',
        text: 'Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet'
    },
    {
        id: 2,
        name: 'Sandar',
        img: img2,
        company: 'Zoom Fashion Idea',
        text: 'Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet'
    },
    {
        id: 3,
        name: 'Marie',
        img: img3,
        company: 'Art Fashion Design',
        text: 'Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet'
    },
    {
        id: 4,
        name: 'Catherine',
        img: img4,
        company: 'Dress Fashion',
        text: 'Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet'
    }
]

const Slide: React.FC<SlidePropsType> = ({slide}) => {

    return (
        <div className="slick-testimonial-caption">
            <p className="lead">{slide.text}</p>

            <div className="slick-testimonial-client d-flex align-items-center mt-4">
                <img src={slide.img} className="img-fluid custom-circle-image me-3" alt="" />

                <span>{slide.name}, <strong className="text-muted">{slide.company}</strong></span>
            </div>
        </div>
    )

}

export const Testimonial: React.FC<PropsType> = (props) => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slick-testimonial',
        dotsClass:'slick-dots-t',
        useCSS: false
    };

    return (
        <section className="testimonial section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-9 mx-auto col-11">
                            <h2 className="text-center">Customer love, <br/> <span>Little</span> Fashion</h2>

                            <div className="slick-testimonial">

                                <Slider {...settings}>
                                    {testimonials.map(t => <Slide key={t.id} slide={t} />)}
                                </Slider>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    )
}