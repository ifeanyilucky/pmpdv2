import React from "react";

const Contact = ()=>{
    return(
        <>
         {/* PRICING */}
         <section>
          <div className="container-lg position-relative" style={{ zIndex: 1 }}>
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 text-center text-white">
                {/* Divider */}
                <hr className="hr-sm bg-warning mx-auto mb-10 mb-md-12" />

                {/* Heading */}
                <h2 className="display-3 mb-4">Pricing made simple.</h2>

                {/* Text */}
                <p className="mb-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  urna lectus, mattis non accumsan in, tempor dictum neque.
                </p>
              </div>
            </div>
            <div className="row align-items-center gx-0">
              <div className="col-md-7">
                {/* Card */}
                <div className="position-relative">
                  {/* Decoration */}
                  <div className="position-absolute bottom-start text-warning ms-n10 mb-n10">
                    <PriceSvgTwo />
                  </div>

                  {/* Card */}
                  <div className="card mb-6 mb-md-0">
                    <div className="card-body position-relative bg-white text-center pb-0">
                      {/* Heading */}
                      <h3 className="display-4 mb-4">Standard</h3>

                      {/* Text */}
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In urna lectus, mattis non accumsan in, tempor dictum
                        neque.
                      </p>
                    </div>
                    <div className="card-body position-relative bg-white">
                      {/* List group */}
                      <ul className="list-group list-group-flush mt-n5">
                        <li className="list-group-item d-flex align-items-center">
                          {/* Title */}
                          <strong>Fees</strong>

                          {/* Text */}
                          <span className="text-end ms-auto">
                            0.25% per trade
                          </span>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                          {/* Title */}
                          <strong>Rebalances</strong>

                          {/* Text */}
                          <span className="text-end ms-auto">12 per year</span>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                          {/* Title */}
                          <strong>Support</strong>

                          {/* Text */}
                          <span className="text-end ms-auto">24 hour chat</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer position-relative border-top">
                      <div className="row">
                        <div className="col-12 col-lg">
                          {/* Price */}
                          <div className="display-4 fw-bolder text-center text-lg-start mb-4 mb-lg-0">
                            <span className="fs-3 align-middle">$</span>
                            <span className="mx-n2">49</span>
                            <span className="fs-2 align-middle">/mo</span>
                          </div>
                        </div>
                        <div className="col-12 col-lg-auto">
                          {/* Button */}
                          <a className="btn btn-primary w-100 lift" href="#!">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                {/* Card */}
                <div className="card bg-gray-800">
                  <div className="card-body text-center text-white py-md-10 py-xl-12">
                    {/* Heading */}
                    <h3 className="display-4 mb-4">Professional</h3>

                    {/* Text */}
                    <p className="text-white-80 mb-0">
                      We offer variable pricing with discounts for larger
                      organizations. Get in touch with us and we’ll figure out a
                      tier that works well for your needs.
                    </p>
                  </div>
                  <div className="card-footer position-relative border-top border-white-5">
                    <div className="row">
                      <div className="col-12 col-xl">
                        {/* Price */}
                        <div className="display-4 fw-bolder text-center text-xl-start text-white mb-4 mb-xl-0">
                          <span className="fs-3 align-middle">$</span>
                          <span className="mx-n2">99</span>
                          <span className="fs-2 align-middle">/mo</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-auto">
                        {/* Button */}
                        <a className="btn btn-primary w-100 lift" href="#!">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
export default Contact