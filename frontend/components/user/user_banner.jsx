import React from 'react';
import { Link } from 'react-router-dom';

const UserBanner = ({ recordingItems, backgroundImg, userOfPage }) => {
    return (
        <>
            <section className="user-recordings">
                <div className="user-page-banner" >
                    <div className="user-hero" style={backgroundImg}></div>
                    <div className="user-portraitandname">
                        <img className="user-hero-portrait" id="user-hero-portrait"
                            src={userOfPage.portraitUrl} />
                        <h1 className="user-hero-name">{userOfPage.username}</h1>
                    </div>
                </div>
                <ul className="user-recordings-list">
                    {recordingItems}
                </ul>
            </section>
        </>
    )
}

export default UserBanner;
