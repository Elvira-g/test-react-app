import img from "../../../assets/img/retail-shop-owner-mask-social-distancing-shopping.jpg";

type FrontProductPropsType = {};

export const FrontProduct = (props: FrontProductPropsType) => {
  return (
    <section className="front-product">
      <div className="container-fluid p-0">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <img src={img} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-6 col-12">
            <div className="px-5 py-5 py-lg-0">
              <h2 className="mb-4">
                <span>Retail</span> shop owners
              </h2>

              <p className="lead mb-4">
                Credits go to Unsplash and FreePik websites for images used in
                this Little Fashion by Tooplate.
              </p>

              <a href="products.html" className="custom-link">
                Explore Products
                <i className="bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
