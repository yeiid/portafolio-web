import React from 'react'
import logo from '../../assets/logo.ico'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
        <h1 className="footer__title"><img src={logo} alt="" /></h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#portafolio" className="footer__link">Projects</a>
            </li>

            {/* <li>
                <a href="#testimonio" className="footer__link">Testimonials</a>
            </li> */}
        </ul>

        <div className="footer__social">
            <a href="https://www.facebook.com/" className="footer__social-link" target="blank">
            <i class="bx bxl-facebook"></i>
            </a>

            <a href="https://www.instagram.com/" className="footer__social-link" target="blank">
            <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://twitter.com/" className="footer__social-link" target="blank">
            <i class="bx bxl-twitter"></i>
            </a>
        
        </div>

        <span className='footer_copy'>
            &#169; Crypticalcoder. All rigths reserved
        </span>
        </div>
    </footer>
  )
}

export default Footer