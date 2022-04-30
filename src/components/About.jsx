import React from 'react';
import hero from './img/hero-img.png';
import { NavLink } from 'react-router-dom';


const About = () => {
    return (
        <div>
        <section id="header" className="d-flex align-items-center ">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
              <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1> A Top Ranked Private University with 80+ courses <strong className="brand-name"><br/>350+ companies available for placement</strong></h1>
                      <h2 className="my-3">Be confident,Be productive...</h2>
                      <div className="mt-3">
                          <NavLink to="/contact" className="btn-get-started"> Contact us </NavLink>
                      </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img src={hero} className="img-fluid animated" alt="home img"></img>

                  </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};


export default About;