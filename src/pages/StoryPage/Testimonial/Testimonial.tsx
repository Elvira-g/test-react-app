import { useEffect, useState } from "react";
import Slider from "react-slick";
import { testimonialsAPI } from "../../../api/testimonialsAPI";
import { TestimonialType } from "../../../types";
import { Slide } from "./Slide";

type Props = {};

const getTestimonials = async () => {
  let data = await testimonialsAPI();
  return data
};

export const Testimonial = (props: Props) => {
  const [testimonials, setTestimonials] = useState<
    Array<TestimonialType> | undefined
  >();

  useEffect(() => {
    getTestimonials().then((data) => setTestimonials(data));
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slick-testimonial",
    dotsClass: "slick-dots-t",
    useCSS: false,
  };

  return (
    <section className="testimonial section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-11">
            <h2 className="text-center">
              Customer love, <br /> <span>Little</span> Fashion
            </h2>

            <div className="slick-testimonial">
              {testimonials ? (
                <>
                  <Slider {...settings}>
                    {testimonials.map((t) => (
                      <Slide key={t.id} slide={t} />
                    ))}
                  </Slider>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
