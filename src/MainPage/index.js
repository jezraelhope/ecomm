import React from "react";

import { AiOutlineMenu } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

import './styles/mainpage.css'

import Favorites from "./Favorites";
import Footer from "../Shared/Footer/Footer";


const MainPage = () => {
    return(
        <div className="main-page">
            <a href="#" className="menu-toggle" aria-label="Open the menu">
                <IconContext.Provider
                    value={{ color: 'black', className: 'burger-image' }}
                >
                    <AiOutlineMenu/>
                </IconContext.Provider>
            </a>
            <div className="hero" >
                <h1>NZM</h1>
            </div>
            <div className="about">
                <p>
                We are on a mission to provide sustainable and beautiful clothing for everyone who cares about the environment.
                </p>
                <p>
                Our items have been carefully curated, with the emphasis on elegant and timeless pieces that will stay in your collection for ages to come and/or can be passed down to the next generation.
                </p>
            </div>
            <div className="feature-quote">
                <div className="texts">
                    <p>
                    “Call it eco-fashion if you like, I think it’s just common sense.”
                    </p>
                    <p>
                    -Livia Firth, founder and creative director of <a href="https://eco-age.com/">Eco-Age</a>
                    </p>
                </div>
            </div>
            <Favorites />
            <Footer />
        </div>
    )
}

export default MainPage;