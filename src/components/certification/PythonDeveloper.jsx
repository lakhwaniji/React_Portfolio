import React from "react";
import certificate from '../../assets/Python_Certficate.jpeg'
const PythonDevloper=()=>{
    return(
        <div className="certification__content">
            <h3 className="certification__title">Python Developer</h3>
            <div className="certification__box">
                <img src={certificate} alt="Certificate"/>
            </div>
        </div>
    )
}

export default PythonDevloper