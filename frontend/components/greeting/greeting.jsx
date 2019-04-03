import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props);

        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.playRecording = this.playRecording.bind(this)
    }

    playRecording(e) {
        if (e.currentTarget.childNodes[0].className === "not_playing") {
            e.currentTarget.childNodes[0].play();
            e.currentTarget.childNodes[0].className = "playing"
        } else {
            e.currentTarget.childNodes[0].pause();
            e.currentTarget.childNodes[0].className = "not_playing"
        }
    } 


    handleDemoLogin(){
        // debugger 
        this.props.demoLogin({ username: "Tyler Bisson", password: 'password' })
            .then(data => {
                this.props.history.push(`/recordings/${data.currentUser.user.id}`)
            });
    }

    componentDidMount() {
        this.props.fetchSplashRecordings();
    }

    sessionLinks(){
        let recordingItems = Object.values(this.props.recordings);
        if (Object.keys(this.props.recordings).length < 1) {
            recordingItems = null;
        } else {
            let recordings = Object.values(this.props.recordings);

            recordingItems = recordings.map(recording =>
                <div className="recording-item" key={"recording-item" + recording.id}
                    onClick={this.playRecording}>
                    <audio className="not_playing">
                        <source src={recording.audioUrl} type="audio/mpeg"></source>
                    </audio>
                    <div className="recording-item-img" key={"recording-item-img" + recording.id}>
                        <img className="recording-art" src={recording.artUrl} />
                        <img className="recording-item-play-button" src={window.playButtonURL} />
                    </div>
                    <div className="recording-item-title" key={"recording-item-title" + recording.id}>
                        {recording.title}</div>
                    <div className="recording-item-user" key={"recording-item-user" + recording.id}>
                        {recording.username}</div>
                </div>)
        }

        return(
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
            <section className="user-recordings">
                <h1 className="user-recordings-header">
                    Hear what’s trending for free in the cult of Stereophonic Cumulonimbus</h1>
                <ul className="user-recordings-list">
                    {recordingItems}
                </ul>
            </section>
            </>
        )
    };
    personalGreeting(){
        // console.log("this.props.currentUser");
        // console.log(this.props.currentUser);
        return(
            <div className="nav-bar"> 
                <nav className="nav-loggedin">
                    <div className="nav-buttonbox-left">
                        <img className="nav-loggedin-logo" src={window.logoURL} />
                        <button className="nav-home">Home</button>
                    </div>
                        <div className="nav-buttonbox-right-loggedin">
                        <button className="nav-upload" 
                            onClick={() => this.props.history.push(`/recordings/new`)} 
                            >Upload</button>
                            <button className={"nav-greetingmessage"}>
                                <img className="user-portrait" 
                                    src={this.props.currentUser.portraitUrl} />
                                {this.props.currentUser.username}</button>
                            <button className="nav-logout" 
                                onClick={this.props.logout}>Log Out</button>
                        </div>
                </nav>
            </div> 
        )
    };

    render(){
        return this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
    }
};


export default withRouter(Greeting);
