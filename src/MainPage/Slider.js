import React from 'react';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const Slider = ({ items }) => {
    return (
        <Fade
        >
            {
            items.map((item) => {
                return item
            })
            }
        </Fade>
    );
};

export default Slider;
