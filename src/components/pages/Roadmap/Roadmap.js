import { useState } from "react";

import {Link} from 'react-router-dom';
import "./Roadmap.css";


const Roadmap = () => {
    const [inputs, setInputs] = useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Get Beta access to  <strong className="brand-name">our portal
                                </strong></h1>
                                <h6 className="my-3">
                                Fill-in the form the below
                                </h6>
                                <div className="form-input">
                                <form>
                                    <label>
                                <input
                                 type="text" 
                                 name="username"
                                 placeholder="FIRST NAME"
                                    value={inputs.username || ""}
                                   onChange={handleChange}
                                   />
                                   </label>
                                   <label>
                                   <input
                                            type="text" 
                                            name="lastname"
                                            placeholder="LAST NAME"
                                          value={inputs.lastname || ""}
                                        onChange={handleChange}
                                       />
                                       </label>
                                       <label>
                                       <input
                                            type="text"
                                            name="email" 
                                            placeholder="EMAIL ADDRESS"
                                          value={inputs.email || ""}
                                        onChange={handleChange}
                                       />
                                       </label>
                                       <label>
                                       <input
                                            type="number" 
                                            name="phonenumber"
                                            placeholder="PHONE NUMBER"
                                          value={inputs.phonenumber || ""}
                                        onChange={handleChange}
                                       />
                                       </label>
                                   
                                   </form>
                                   </div>
                                   
                                <div className="mt-3">
                                    <Link to ="/Pricing" className="btn-get-started" >
                                        Get Started Today
                                          </Link>
                                         </div>
                            </div>
                           
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src="laptop.png"  alt="about img"/>
                             </div>
                            </div>
                    </div>
                   
                </div>

            </div>
        </section>
            
        </>
    )
}

export default Roadmap;
