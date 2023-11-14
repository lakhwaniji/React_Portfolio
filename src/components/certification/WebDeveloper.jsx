import React from "react";
import certificate from '../../assets/Web_Development_Certificate.jpeg'
const WebDevloper=()=>{
    return(
        <div className="certification__content">
            <h3 className="certification__title">Web Developer</h3>
            <div className="certification__box">
                <img src={certificate} alt="Certificate"/>
            </div>
        </div>
    )
}

export default WebDevloper