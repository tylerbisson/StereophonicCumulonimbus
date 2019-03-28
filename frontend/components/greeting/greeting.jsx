import React from 'react';
// import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, demoLogin, openModal, closeModal}) => {

    if (currentUser) {
        closeModal() 
    }

    const sessionLinks = () => (
        <section className="greeting-hero">
            <nav className="login-signup">
                <div className="nav-buttonbox-left-splash">
                    <img className="logo" src={window.logoURL} />
                    <h1>STEREOPHONIC CUMULONIMBUS</h1>     
                </div>
                <div className="nav-buttonbox-right">
                    <button className="nav-login" 
                        onClick={() => openModal('login')}>Sign in</button>
                        &nbsp;&nbsp;
                    <button className="nav-signup" 
                        onClick={() => openModal('signup')}>Create account</button>
                </div>
            </nav>
            <div className="hero-slogan">
                <h1>What's next in music is first on Stereophonic Cumulonimbus</h1>
                <button className="demo-button"
                    onClick={() => demoLogin(
                        { username: "Demonstrational User For Your Convenience", password: 'password' })}
                        >Try a demo</button>
            </div>
        </section>
    );
    const personalGreeting = () => (
        // <hgroup className="header-group">
        //     <h2 className="header-name">Hi, {currentUser.username}!</h2>
        //     <button className="header-button" onClick={logout}>Log Out</button>
        // </hgroup>
        // <section className="greeting-hero">
            <nav className="nav-loggedin">
                <div className="nav-buttonbox-left">
                    <img className="nav-loggedin-logo" src={window.logoURL} />
                    <button className="nav-home">Home</button>
                </div>
                    <div className="nav-buttonbox-right-loggedin">
                        <button className={"nav-greetingmessage"}>
                            Hi, {currentUser.username}!</button>
                        <button className="nav-logout" 
                            onClick={logout}>Log Out</button>
                    </div>
            </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
