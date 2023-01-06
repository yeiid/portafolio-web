import React from 'react'
import './qualication.css'
import { useState } from 'react'

const Qualication = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }


    return (
        <section className="qualication section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualication__container container">
                <div className="qualication__tabs">
                    <div className={
                        toggleState === 1
                        ?"qualication__button qualication__active button--flex": "qualication__button button--flex"
                        }
                        onClick={()=> toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap  qualication__icon"></i>Education
                    </div>

                    <div className={
                        toggleState === 2
                        ?"qualication__button qualication__active button--flex": "qualication__button button--flex"
                        }
                        onClick={()=> toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt qualication__icon"></i>Experience
                    </div>
                </div>
            </div>

            <div className="qualication__sections">

                <div className={toggleState===1 ? "qualication__content qualication__content-active":"qualication__content"}>

                    <div className="qualication__data">
                        <div>
                            <h3 className="qualication__title"> Tecnologo Ambiental</h3>
                            <span className="qualication__subtitle">Colombia - Sena</span>
                            <div className="qualication__calender">
                                <i className="uil uil-calender-alt"></i>
                                2018 - 2020
                            </div>
                        </div>
                        <div>
                            <span className="qualication__rounder"></span>
                            <span className="qualication__line"></span>
                        </div>
                    </div>

                    <div className="qualication__data">
                            <div></div>
                            <div>
                                <span className="qualication__rounder"></span>
                                <span className="qualication__line"></span>
                            </div>
                        <div>
                            <h3 className="qualication__title">Introduccion a Python</h3>
                            <span className="qualication__subtitle">Colombia - Udemy</span>
                            <div className="qualication__calender">
                                <i className="uil uil-calender-alt"></i>
                                2021 - 2021
                            </div>
                        </div>
                    </div>


                    <div className="qualication__data">

                        <div>
                            <h3 className="qualication__title"> Programacion Basica y Desarrollo de Sotfware</h3>
                            <span className="qualication__subtitle">Colombia - UPB-MinTic</span>
                            <div className="qualication__calender">
                                <i className="uil uil-calender-alt"></i>
                                2021 - 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualication__rounder"></span>
                            <span className="qualication__line"></span>
                        </div>
                    </div>

                    <div className="qualication__data">
                        <div></div>
                        <div>
                            <span className="qualication__rounder"></span>
                            <span className="qualication__line"></span>
                        </div>
                        <div>
                            <h3 className="qualication__title">Curso Introducctoria a Internet la Web y Programacion</h3>
                            <span className="qualication__subtitle">Colombia - Cono Sur Tech</span>
                            <div className="qualication__calender">
                                <i className="uil uil-calender-alt"></i>
                                2022 - 2022
                            </div>
                        </div>

                    </div>


                </div>


                <div className={toggleState ===2 ? "qualication__content qualication__content-active":"qualication__content"}>

                <div className="qualication__data">
                    <div>
                        <h3 className="qualication__title">Frelence</h3>
                        <span className="qualication__subtitle">Frelence - Colombia</span>
                        <div className="qualication__calender">
                            <i className="uil uil-calender-alt"></i>
                            2021 - 2022
                        </div>
                    </div>
                    <div>
                        <span className="qualication__rounder"></span>
                        <span className="qualication__line"></span>
                    </div>
                </div>

                <div className="qualication__data">
                    <div></div>
                    <div>
                        <span className="qualication__rounder"></span>
                        <span className="qualication__line"></span>
                    </div>
                    <div>
                        <h3 className="qualication__title">Desarrollador Web</h3>
                        <span className="qualication__subtitle"> Frelence - Colombia</span>
                        <div className="qualication__calender">
                            <i className="uil uil-calender-alt"></i>
                            2021 - 2023
                        </div>
                    </div>

                </div>


                {/* <div className="qualication__data">
                    <div>
                        <h3 className="qualication__title"> Web Designer</h3>
                        <span className="qualication__subtitle">Figma - Spain</span>
                        <div className="qualication__calender">
                            <i className="uil uil-calender-alt"></i>
                            2018 - 2020
                        </div>
                    </div>
                    <div>
                        <span className="qualication__rounder"></span>
                        <span className="qualication__line"></span>
                    </div>
                </div> */}



                </div>
            </div>
        </section>
    )
}

export default Qualication;