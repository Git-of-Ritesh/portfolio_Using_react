import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import {motion} from 'framer-motion'


const Navbar = () => {
    const location = useLocation()

    // Define a variable to check if the user is on the contact page
    const isContactPage = location.pathname === '/contact';

       // useEffect hook to change the body's background color based on the current route
       useEffect(() => {
        if (isContactPage) {
            document.body.style.backgroundColor = 'black'; // Change body background to black on the contact page
        } else {
            document.body.style.backgroundColor = ''; // Reset background to default on other pages
        }
    }, [isContactPage]); // Re-run effect when isContactPage changes


    const [menuopen, setmenuOpen] = useState(false)
    return (
        <motion.header 
        initial={{y: "-200%"}}
        animate={{y: "0%"}}
        transition={{duration: 0.5, delay: 3}}
        className={`header $ ${isContactPage ? 'contact-link' : ''}`}>
            <div className='logo-bar'>
                <div className='logos'>
                    <Link to="/home" className={`logo $ ${isContactPage ? 'contact-link' : ''}`}>Ritesh</Link>
                    <div className='wrapper'>
                        <div className='Words'>
                            <span className={`word-title  ${isContactPage ? 'contact-link' : ''}`} >web developer</span>
                            <span className={`word-title  ${isContactPage ? 'contact-link' : ''}`}>ui/ux designer</span>
                            <span className={`word-title  ${isContactPage ? 'contact-link' : ''}`}>c++ coder</span>
                            <span className={`word-title  ${isContactPage ? 'contact-link' : ''}`}>web developer</span>
                        </div>
                    </div>
                </div>

                <div className='menu' onClick={() => {
                    setmenuOpen(!menuopen);
                }}>
                    <i class="fa-solid fa-bars fa-2xl"></i>
                </div>
            </div>

        
            <nav className={menuopen ? "open" : ""}>
                <div className='navbar'>
                    <div className='nav1'>
                        <div className='nav-item1'>
                            <Link to="/about"  className={`nav-link ${isContactPage ? 'contact-link' : ''}`}>About,</Link>
                        </div>
                        <div className='nav-item2'>
                            <Link to="/work"  className={`nav-link ${isContactPage ? 'contact-link' : ''}`}>Work,</Link>
                        </div>
                    </div>
                    <div className='nav2'>
                        <Link to="/contact"  className={`nav-link ${location.pathname === '/contact' ? 'active-link contact-link' : ''}`}>Contact</Link>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </nav>

        </motion.header>
    )
}

export default Navbar
