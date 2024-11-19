import React from 'react'
import './Footer.css'
import { useLocation } from 'react-router-dom';

export const Footer = () => {
    const location = useLocation()

    // Define a variable to check if the user is on the contact page
    const isContactPage = location.pathname === '/contact';

  return (
   <section className='footer-sec'>

    <div className='footer-part'>
        <div className={`footer-p1 ${isContactPage ? 'contact-link' : ''}`}>
            <h4>Ritesh Pandey</h4>
            <h4>Creative developer</h4>
        </div>

        <div className='footer-p2'>
            <a href="">Twitter,</a>
            <a href="">Linkedin,</a>
            <a href="">Github</a>
        </div>

        <div className={`footer-p1 ${isContactPage ? 'contact-link' : ''}`} >
            <h4>Development Ritesh Pandey</h4>
            <h4>Designe Ritesh Pandey</h4>
        </div>
    </div>

   </section>
  )
}
