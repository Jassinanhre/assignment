import React from 'react';
import {Link} from 'react-router-dom';
import "./About.css";

const About = () => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Generate intelligent demand for your business using our real time <strong className="brand-name">marketing 
                                technology</strong></h1>
                                <h6 className="my-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus est 
                                ac nunc gravida dapibus. Ut tempus neque vitae volutpat faucibus. Quisque
                                 euismod purus non eros molestie, non feugiat justo consequat. Phasellus ut 
                                 felis vehicula, viverra diam non, faucibus est.
                                </h6>
                                <div className="mt-3">
                                    <Link to ="/roadmap" className="btn-get-started" >
                                        Get Started Today
                                          </Link>
                                         </div>
                            </div>
                           
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src="library.jpg" className="img-fluid animated" alt="about img"/>
                             </div>
                            </div>
                    </div>
                   
                </div>

            </div>
        </section>
            
        </>
    )
}

export default About;
