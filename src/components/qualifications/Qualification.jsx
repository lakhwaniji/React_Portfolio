import React from "react";
import "./qualification.css"
const Qualification=()=>{
    return(
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <i className="uil uil-graduation-cap 
                        qualification__icon"></i>Education
                    </div>
                    {/*<div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt
                        qualification__icon"></i>{" "}
                        Experience
                    </div>*/}
                </div>
                <div className="qualifications__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Btech-Hons in CSE Specialisation in IOT & IS</h3>
                                <span className="qualification__subtitle">Manipal University Jaipur</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2021 - Present</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">XII th Board CBSE</h3>
                                <span className="qualification__subtitle">St Paul Senior Sec School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2020 - 2021</i>
                                </div>
                            </div>
                            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">X th Board ICSE</h3>
                                <span className="qualification__subtitle">Sacred Heart Convent Hr Sec School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2018 - 2019 </i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    {/*<div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Btech-Hons in CSE Specialisation in IOT & IS</h3>
                                <span className="qualification__subtitle">Manipal University Jaipur</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2021 - Present</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">XII th Board CBSE</h3>
                                <span className="qualification__subtitle">St Paul Senior Sec School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2020 - 2021</i>
                                </div>
                            </div>
                            
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">X th Board ICSE</h3>
                                <span className="qualification__subtitle">Sacred Heart Convent Hr Sec School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2018 - 2019</i>
                                </div>
                            </div>
                            
                        </div>
                </div>*/}
                </div>
            </div>
        </section>
    )
}

export default Qualification;