import React from 'react';
import './HeaderSCSS.scss'

const HeaderSCSS = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <div className="first-box">
                <h2>first box</h2>
            </div>
            <div className="second-box">
                <h2>Second box</h2>
            </div>
            <div className="third-box">
                <h2>third box</h2>
            </div>
            <div className="forth-box">
                <h2>forth box</h2>
            </div>
        </div>
    );
};

export default HeaderSCSS;