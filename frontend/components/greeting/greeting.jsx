import React from 'react';
// import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal}) => {
    // debugger
    const sessionLinks = () => (
        <section className="greeting-hero">
            <nav className="login-signup">
                <img className="logo" src={window.logoURL} />
                <div className="nav-buttonbox">
                    {/* <Link className="nav-login" to="/login">Login</Link> */}
                    <button className="nav-login" onClick={() => openModal('login')}>Login</button>
                        &nbsp;&nbsp;
                    {/* <Link className="nav-signup" to="/signup">Sign up!</Link> */}
                    <button className="nav-signup" onClick={() => openModal('signup')}>Sign up!</button>
                </div>
            </nav>
        </section>
    );
    const personalGreeting = () => (
        // <hgroup className="header-group">
        //     <h2 className="header-name">Hi, {currentUser.username}!</h2>
        //     <button className="header-button" onClick={logout}>Log Out</button>
        // </hgroup>
        // <section className="greeting-hero">
            <nav className="nav-loggedin">
                <img className="logo" src={window.logoURL} />
                <div className="nav-buttonbox">
                    <button className="nav-login">Home</button>
                    {/* &nbsp;&nbsp; */}
                    {/* <button className="nav-signup" onClick={() => openModal('signup')}>Sign up!</button> */}
                </div>
            </nav>
        // </section>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
