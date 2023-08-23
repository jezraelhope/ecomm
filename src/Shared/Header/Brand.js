import React from 'react';



const Brand = (props) => {
    return (
        <header onClick={props.filterItems}>
            <a className='brand' href="https://nzm.netlify.app/">
                <h1>NZM</h1>
            </a>
        </header>
    );
};

export default Brand;
