import React from "react";
import WebDevloper from "./WebDeveloper";
import PythonDevloper from "./PythonDeveloper";
import RedHat from "./RedHat";
import Nptel from "./Nptel";
import "./certification.css";
const Certification=()=>{
    return(
        <section className="certification section">
            <div className="qualification__button button--flex">
                        <div><i className=" uil uil-postcard 
                            qualification__icon"></i>Certification
                        </div>
            </div>
            <div className="certification__container container grid">
                <WebDevloper/>
                <PythonDevloper/>
                <RedHat/>
                <Nptel/>
            </div>
        </section>
    )
}

export default Certification