import React from 'react'
import img1 from '../../../../assets/img/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg'
import img2 from '../../../../assets/img/people/beautiful-woman-face-portrait-brown-background.jpeg'
import img3 from '../../../../assets/img/people/portrait-british-woman.jpeg'
import img4 from '../../../../assets/img/people/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg'
import { TestimonialType } from '../../../../types/types'

type SlidePropsType = {
    slide: TestimonialType
}

export const Slide = ({slide}: SlidePropsType) => {

    return (
        <div className="slick-testimonial-caption">
            <p className="lead">{slide.title}</p>

            <div className="slick-testimonial-client d-flex align-items-center mt-4">
                <img src={img1} className="img-fluid custom-circle-image me-3" alt="" />

                <span>{slide.title}, <strong className="text-muted">{slide.title}{slide.title}</strong></span>
            </div>
        </div>
    )

}