import React, {useState,useEffect} from 'react';
import {Button} from "./Button";
import {Link} from 'react-router-dom';
import './Navbar.css';
import { FaSeedling } from 'react-icons/fa';
import {FaBars ,FaTimes} from 'react-icons/fa';



function Navbar() {
    const[click,setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
        setButton(false);
       }else{
         setButton(true);
        }
};
useEffect(() => {
   showButton();
}, []);
window.addEventListener('resize', showButton);
    return (
        <>
      
        <div className="navbar">
             <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <FaSeedling className='navbar-icon' />
            SEEDA
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to ='/' className="nav-links" onClick={closeMobileMenu}>
                            Features
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to ='/About' className="nav-links" onClick= {closeMobileMenu}>
                           About
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to ='/Roadmap' className="nav-links" onClick={closeMobileMenu}>
                         Roadmap
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to ='/Pricing' className="nav-links" onClick ={closeMobileMenu}>
                            Pricing
                        </Link>

                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to ='/sign-up'className="btn-link">
                                <Button   buttonStyle='btn--outline' onClick ={closeMobileMenu}>SIGN UP</Button>
                            </Link>
                        ):(
                            <Link to ='/sign-up'className="btn-link">
                                <Button  buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>SIGN UP
                                </Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
       
        </>
    )
}

export default Navbar;
