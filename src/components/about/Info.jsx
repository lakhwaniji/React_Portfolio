import React from "react";

const Info=()=>{
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award">
                    <h3 className="about__title">Graduation</h3>
                    <span className="about__subtitle">2025</span>
                </i>
            </div>
            <div className="about__box">
                <i className="bx bx-briefcase-alt">
                    <h3 className="about__title">Completed</h3>
                    <span className="about__subtitle">8 + Projects </span>
                </i>
            </div>  
            <div className="about__box">
                <i className="bx bx-support">
                    <h3 className="about__title">Support</h3>
                    <span className="about__subtitle">Online 24/7 </span>
                </i>
            </div>     
        </div>
    )
}

export default Info;