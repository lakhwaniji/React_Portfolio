import React from "react";
import certificate from '../../assets/Nptel.jpg'
const Nptel=()=>{
    return(
        <div className="certification__content">
            <h3 className="certification__title">Design and Analysis</h3>
            <div className="certification__box">
                <img src={certificate} alt="Certificate"/>
            </div>
        </div>
    )
}

export default Nptel