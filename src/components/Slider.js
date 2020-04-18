import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <section>
                <div className="slider">
                    <div className="slider__contain">
                        <img src="images/pottery-graphic-slider-01.png" alt="Home Slider"/>
                        <h1 className="mt-2">Exclusive Ceramics </h1>
                        <h1>& Pottery Retailer </h1>
                        <p className="mt-4">WE MAKE UNIQUE THINGS WITH LOVE AND PASSION </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Slider;