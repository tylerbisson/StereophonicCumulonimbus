import { connect } from 'react-redux';
import { logout, login } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import { fetchSplashRecordings } from '../actions/recordings_actions';
import React, { useState, useEffect } from 'react';
import RecordingItem from '../components/recordings/recording_item';
import { receiveActiveRecording } from '../actions/active_recording_actions';


function Splash(props) {

    useEffect(() => {
        props.fetchSplashRecordings();
    }, [])

    // useEffect(() => {
    //     if (prevProps.currentUser !== props.currentUser && !props.currentUser) {
    //         props.fetchSplashRecordings();
    //     }
    // })

    const handleDemoLogin = () => {
        props.demoLogin({ username: "Tyler Bisson", password: 'password' })
            .then(data => {
                props.history.push(`/discover`)
            });
    }

    let recordingItems = Object.values(props.recordings);
    if (Object.keys(props.recordings).length < 1) {
        recordingItems = null;
    } else {
        let recordings = Object.values(props.recordings);

        recordingItems = recordings.map(recording =>
            <RecordingItem recording={recording} key={recording.id}
                receiveActiveRecording={props.receiveActiveRecording}
                activeRecording={props.activeRecording} />)
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
                            onClick={() => props.openModal('login')}>Sign in</button>
                        &nbsp;&nbsp;
                        <button className="nav-signup"
                            onClick={() => props.openModal('signup')}>Create account</button>
                    </div>
                </nav>
                <div className="hero-slogan">
                    <h1>What's next in music is first on Stereophonic Cumulonimbus</h1>
                    <button className="demo-button" onClick={handleDemoLogin}>Login as Demo User</button>
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

const mapStateToProps = ({ session, entities: { users, recordings }, ui }) => {
    return {
        recordings: recordings,
        currentUser: users[session.id],
        activeRecording: ui.activeRecording
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    demoLogin: demoUser => dispatch(login(demoUser)),
    fetchSplashRecordings: () => dispatch(fetchSplashRecordings()),
    receiveActiveRecording: args => dispatch(receiveActiveRecording(args))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

