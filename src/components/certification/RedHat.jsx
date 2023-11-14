import React from "react";
import certificate from '../../assets/redhat.png'
const RedHat=()=>{
    return(
        <div className="certification__content">
            <h3 className="certification__title">Linux</h3>
            <div className="certification__box">
                <img src={certificate} alt="Certificate"/>
            </div>
        </div>
    )
}

export default RedHat