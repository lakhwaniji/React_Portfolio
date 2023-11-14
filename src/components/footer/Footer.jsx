import React from "react";
import './footer.css'
const Footer=()=>{
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Lakhwani</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">Qualifications</a>
                    </li>
                </ul>
                <div className="footer__social">
                <a href="https://www.instagram.com/love.lakhwani/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i class='uil uil-instagram'/>
                </a>
                <a href="https://www.linkedin.com/in/love-lakhwani-939054201/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i class="uil uil-linkedin"></i>
                </a>
                <a href="https://github.com/lakhwaniji/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i class="uil uil-github"></i>
                </a>
                </div>
            </div>
            <span className="footer__copy">&#169; Lakhwani All rights reserved </span>
        </footer>
    )
}

export default Footer