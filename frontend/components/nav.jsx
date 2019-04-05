import { connect } from 'react-redux';
import { logout, login } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.redirectToUserPage = this.redirectToUserPage.bind(this);
        this.redirectToHome = this.redirectToHome.bind(this);
    }

    redirectToUserPage(){
        this.props.history.push(`/users/${this.props.currentUser.id}`)
    }

    redirectToHome(){
        this.props.history.push(`/`)
    }

    navLoggedIn(){
        return (
            <div className="nav-bar">
                <nav className="nav-loggedin">
                    <div className="nav-buttonbox-left">
                        <img className="nav-loggedin-logo" src={window.logoURL} />
                        <button className="nav-home">
                            Home
                        </button>
                    </div>
                    <div className="nav-buttonbox-right-loggedin">
                        <button className="nav-upload"
                        onClick={() => this.props.history.push(`/recordings/new`)}>
                            Upload
                        </button>
                        <button className={"nav-greetingmessage"} onClick={this.redirectToHome}>
                            <img className="user-portrait" src={this.props.currentUser.portraitUrl} />
                            {this.props.currentUser.username}
                        </button>
                        <button className="nav-logout" onClick={this.props.logout}>
                            Log Out
                        </button>
                    </div>
                </nav>
            </div>
        )
    }

    navLoggedOut() {
        return (
            <div className="nav-bar">
                <nav className="nav-loggedin">
                    <div className="nav-buttonbox-left">
                        <img className="nav-loggedin-logo" src={window.logoURL} />
                        <button className="nav-home" onClick={this.redirectToHome}>
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

    render() {
        return this.props.currentUser ? this.navLoggedIn() : this.navLoggedOut();
    };
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