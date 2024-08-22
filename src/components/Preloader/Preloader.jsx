import React from 'react';
import './Preloader.css';
// Import the CSS file

const CookingAnimation = () => {
    return (
        <div className="loader">
            <h1>Cooking in progress..</h1>
            <div id="cooking">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div id="area">
                    <div id="sides">
                        <div id="handle"></div>
                        <div id="pan"></div>
                    </div>
                    <div id="pancake">
                        <div id="pastry"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookingAnimation;
