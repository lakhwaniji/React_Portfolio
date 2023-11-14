import React from "react";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./projects.css"
import {Pagination} from "swiper/modules";

const Projects=()=>{
    return(
        <div>
            <section className="projects container section" id="projects">
                <h2 className="section__title">
                    My Projects
                </h2>
                <span className="section__subtitle">
                    Web_Dev/Iot/Python
                </span>
                <Swiper className="projects__container "
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },}}
                  modules={[Pagination]}
                >
                    {
                        Data.map(({id,image,title,description,link})=>{
                            return(
                                <SwiperSlide className="projects__card" key={id}>
                                    <img src={image} alt="Project__Image" 
                                    className="projects__img"/>
                                    <h3 className="projects__name">{title}</h3>
                                    <p className="projects__description">{description}</p>
                                    <a href={link}><p className="github__link" style={{color:"rgba(0,0,0,0.7)"}}>Source_Code -{`>`}</p></a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
        </div>
    )
}

export default Projects