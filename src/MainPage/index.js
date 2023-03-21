import React, { Fragment, useState } from 'react';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

import './styles/mainpage.css';
import Favorites from './Favorites';
import Footer from '../Shared/Footer/Footer';
import MainHeader from './MainHeader';

const MainPage = () => {
    const [headerOpen, setHeaderOpen] = useState(false);

    const toggleHeader = () => {
        setHeaderOpen(!headerOpen);
    };
    return (
        <main>
            <button
                href="#"
                className="menu-toggle"
                aria-label="Open the menu"
                onClick={toggleHeader}
            >
                <IconContext.Provider
                    value={{ color: 'black', className: 'burger-image' }}
                >
                    {headerOpen ? (
                        <AiOutlineClose size={30} />
                    ) : (
                        <AiOutlineMenu size={30} />
                    )}
                </IconContext.Provider>
            </button>
            {headerOpen && <MainHeader setHeaderOpen={setHeaderOpen} />}
            <div className="main-page">
                <div className="hero">
                    <h1>NZM</h1>
                </div>
                <div className="about" id="about">
                    <div className="about-content">
                        <p>
                            We are on a mission to provide sustainable and
                            beautiful clothing for everyone who cares about the
                            environment.
                        </p>
                        <p>
                            Our items have been carefully curated, with the
                            emphasis on elegant and timeless pieces that will
                            stay in your collection for ages to come and/or can
                            be passed down to the next generation.
                        </p>
                    </div>
                </div>
                <div className="feature-container">
                    <div className="texts">
                        <p>
                            “Call it eco-fashion if you like, I think it’s just
                            common sense.”
                        </p>
                        <p>
                            -Livia Firth, founder and creative director of{' '}
                            <a href="https://eco-age.com/">Eco-Age</a>
                        </p>
                    </div>
                    <div className="feature-image"></div>
                </div>
                <Favorites />
                <div id="contact">
                    <Footer />
                </div>
            </div>
        </main>
    );
};

export default MainPage;
