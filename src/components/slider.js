import React, { Component } from "react";
import Slider from "react-slick";

export class TestimonialSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <>
        <section className="position-relative">
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8 position-static">
                {/* Divider */}
                <hr className="hr-sm bg-warning mx-auto mb-10 mb-md-12" />

                {/* Slider */}
                <div className="position-static flickity-soft-edges flickity-buttons-responsive">
                  <div>
                    <Slider {...settings}>
                      <div className="col-12 px-4">
                        <blockquote className="text-center mb-0">
                          {/* Preheading */}
                          <h6 className="text-uppercase text-warning mb-3 mb-md-5">
                            Keep it simple
                          </h6>

                          {/* Heading */}
                          <h2 className="display-3 mb-5 mb-md-8">
                            <q>
                              I will say Kudos, not because of the{" "}
                              <span className="text-underline-warning">
                                completed project
                              </span>
                              , but because of the spirit behind your company
                              and that means you're going far
                            </q>
                          </h2>

                          {/* Footer */}
                          <footer>
                            {/* Avatar */}
                            <div className="avatar mb-4">
                              <img
                                className="avatar-img rounded-circle"
                                src="/static/img/avatars/avatar-9.jpg"
                                alt="..."
                              />
                            </div>

                            {/* Heading */}
                            <h4 className="font-sans-serif mb-0">
                              Dr. Julius Ijitola
                            </h4>

                            {/* Position */}
                            <p className="fs-sm text-muted mt-n1 mb-0">
                              Jentoscopes Specialist Clinics
                            </p>
                          </footer>
                        </blockquote>
                      </div>
                      <div className="col-12 px-4">
                        <blockquote className="text-center mb-0">
                          {/* Preheading */}

                          {/* Heading */}
                          <h2 className="display-3 mb-5 mb-md-8">
                            <q>
                              Your company has saved us from{" "}
                              <span className="text-underline-warning">
                                web disaster
                              </span>
                              , we will continue to work with you when
                              necessary, thanks a lot
                            </q>
                          </h2>

                          {/* Footer */}
                          <footer>
                            {/* Avatar */}
                            <div className="avatar mb-4">
                              <img
                                className="avatar-img rounded-circle"
                                src="/static/img/avatars/avatar-6.jpg"
                                alt="..."
                              />
                            </div>

                            {/* Heading */}
                            <h4 className="font-sans-serif mb-0">
                              Mr. Chigozie Ndubuisi
                            </h4>

                            {/* Position */}
                            <p className="fs-sm text-muted mt-n1 mb-0">
                              CEO/Founder -- Cardinal Fleet Ltd
                            </p>
                          </footer>
                        </blockquote>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default TestimonialSlider;
