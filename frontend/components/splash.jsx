import { connect } from 'react-redux';
import { logout, login } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import { fetchSplashRecordings } from '../actions/recordings_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';
import RecordingItem from '../components/recordings/recording_item';

class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin() {
        this.props.demoLogin({ username: "Tyler Bisson", password: 'password' })
            .then(data => {
                this.props.history.push(`/discover`)
            });
    }

    componentDidMount() {
        this.props.fetchSplashRecordings();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser && !this.props.currentUser) {
            this.props.fetchSplashRecordings();
        }
    }

    render(){
        let recordingItems = Object.values(this.props.recordings);
        if (Object.keys(this.props.recordings).length < 1) {
            recordingItems = null;
        } else {
            let recordings = Object.values(this.props.recordings);

            recordingItems = recordings.map(recording =>
                <RecordingItem recording={recording} key={recording.id} />)
        }

        return (
            <>
                <section className="greeting-hero">
                    <nav className="login-signup">
                        <div className="nav-buttonbox-left-splash">
                            <img className="logo" src={window.logoURL} />
                            <h1>STEREOPHONIC CUMULONIMBUS</h1>
                        </div>
                        <div className="nav-buttonbox-right">
                            <button className="nav-login"
                                onClick={() => this.props.openModal('login')}>Sign in</button>
                            &nbsp;&nbsp;
                        <button className="nav-signup"
                                onClick={() => this.props.openModal('signup')}>Create account</button>
                        </div>
                    </nav>
                    <div className="hero-slogan">
                        <h1>What's next in music is first on Stereophonic Cumulonimbus</h1>
                        <button className="demo-button" onClick={this.handleDemoLogin}>Login as Demo User</button>
                    </div>
                </section>
                <section className="splash-recordings">
                    <h1 className="splash-recordings-header">
                        Hear what’s trending for free in the cult of Stereophonic Cumulonimbus</h1>
                    <ul className="splash-recordings-list">
                        {recordingItems}
                    </ul>
                </section>
            </>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

