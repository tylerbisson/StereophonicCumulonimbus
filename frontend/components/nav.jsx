import { connect } from 'react-redux';
import { logout, login } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';

function Nav(props) {

    const redirectToUserPage = () =>{
        props.history.push(`/users/${props.currentUser.id}`)
    }

    const redirectToHome = () => {
        if(props.currentUser){
            props.history.push(`/discover`)
        } else {
            props.history.push(`/`)
        }
    }

    const navLoggedIn = () => {
        return (
            <div className="nav-bar">
                <nav className="nav-loggedin">
                    <div className="nav-buttonbox-left">
                        <img className="nav-loggedin-logo" src={window.logoURL} />
                        <button className="nav-home" onClick={redirectToHome}>
                            Home
                        </button>
                    </div>
                    <div className="nav-buttonbox-right-loggedin">
                        <button className="nav-upload"
                        onClick={() => props.history.push(`/recordings/new`)}>
                            Upload
                        </button>
                        <button className={"nav-greetingmessage"} onClick={redirectToUserPage}>
                            <img className="user-portrait" src={props.currentUser.portraitUrl} />
                            {props.currentUser.username}
                        </button>
                        <button className="nav-logout" onClick={props.logout}>
                            Log Out
                        </button>
                    </div>
                </nav>
            </div>
        )
    }

    const navLoggedOut = () => {
        return (
            <div className="nav-bar">
                <nav className="nav-loggedin">
                    <div className="nav-buttonbox-left">
                        <img className="nav-loggedin-logo" src={window.logoURL} />
                        <button className="nav-home" onClick={redirectToHome}>
                            Home
                        </button>
                    </div>
                    <div className="nav-buttonbox-right-loggedin">
                        <button className="nav-loggedout-login">
                            Log In
                        </button>
                        <button className="nav-loggedout-signup">
                            Sign Up 
                        </button>
                    </div>
                </nav>
            </div>
        )
    }

    return props.currentUser ? navLoggedIn() : navLoggedOut();
};

const mapStateToProps = ({ session, entities: { users, recordings } }) => {
    return {
        recordings: recordings,
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    demoLogin: demoUser => dispatch(login(demoUser)),
    fetchSplashRecordings: () => dispatch(fetchSplashRecordings())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));