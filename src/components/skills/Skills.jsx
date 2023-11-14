import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Python from "./Python";
import Iot from "./Iot";
const Skills=()=>{
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Levels</span>
            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <Python/>
                <Iot/>
            </div>
        </section>
    )
}

export default Skills