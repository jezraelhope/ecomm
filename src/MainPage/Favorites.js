import React, {useRef, useState} from "react";

import useResizeObserver from '@react-hook/resize-observer'
import products from "../Data/productDetails";
import Slider from "./Slider";


const Favorites = () => {
    const favoriteRef = useRef(null);
    const [isDesktopSize, setIsDesktopSize] = useState(false);
    const favorites = products.filter(product => {
        return product?.favorite;
    }).map(product => {
        return (
            <div className="each-fade favorites">
                <div className="slider-image-container">
                <img src={product.image[0]} className=""/>
                </div>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        )
    });
    useResizeObserver(favoriteRef, (entry) => {
        if(entry?.contentRect?.width > 1025) {
            setIsDesktopSize(true);
        } else {
            setIsDesktopSize(false);
        }
    })
    return (
        <div className="favorites-container" ref={favoriteRef}>
            <h3 className="favorite-text-positioning">Some of Our Favorite Pieces</h3>
            <div className="slide-container">
                {isDesktopSize ? <div className="favorite-desktop">{favorites}</div> : <Slider items={favorites} />}

            </div>
            <a href="/products" className="favorite-text-positioning favorite-button">Shop All</a>
        </div>
    )
}

export default Favorites