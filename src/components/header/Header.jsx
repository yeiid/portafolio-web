import React from 'react'
import { useState } from 'react'
import './header.css'
const Header = () => {

    window.addEventListener("scroll", function () {

// ============CHANGE BACKGROUND HEADER==================
    const header = document.querySelector(".header");

    if (this.scrollY >= 200) header.classList.add("scroll-header");

    else header.classList.remove("scroll-header");
    })

// =====================TOGGLE MENU==================
    const [Toggle, showMenu] = useState(false)
    const [activeNav,setActiveNav] = useState("#home")
    return (
        <header className="header">
            <nav className="nav container">
                <a href="indez.html" className="nav__logo">Smith</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a href="#home" onClick={()=>
                                setActiveNav('#home')
                            }  className={ activeNav ==="#home"? "nav__link active-link" : "nav__link" }
                            >
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about"onClick={()=>
                                setActiveNav('#about')
                            }  className={ activeNav ==="#about"? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={()=>
                                setActiveNav('#skills')
                            }  className={ activeNav ==="#skills"? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-file nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" onClick={()=>
                                setActiveNav('#services')
                            }  className={ activeNav ==="#services"? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-briefcase nav__icon"></i>Service
                            </a>
                        </li>

                        {/* <li className="nav__item">
                            <a href="#qualication" onClick={()=>
                                setActiveNav('#qualication')
                            }  className={ activeNav ==="#qualication"? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-scenery nav__icon"></i>
                                qualication
                            </a>
                        </li> */}

                        <li className="nav__item">
                            <a href="#contact" onClick={()=>
                                setActiveNav('#contact')
                            }  className={ activeNav ==="#contact"? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;