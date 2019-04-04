import React from 'react';
import {connect} from 'react-redux';
import { throws } from 'assert';
import {fetchRecordings} from '../../actions/recordings_actions';
import {fetchUser} from '../../actions/user_actions';

class RecordingIndex extends React.Component {
    constructor(props) {
        super(props);

        // debugger
        this.state = {
            recordings: this.props.title, 
            userId: this.props.userId,
            currentUser: this.props.currentUser,
            userOfPage: this.props.userOfPage
        }
        this.playRecording = this.playRecording.bind(this);
    }
    
    playRecording(e) {
        if (e.currentTarget.childNodes[0].className === "not_playing"){
            e.currentTarget.childNodes[0].play();
            e.currentTarget.childNodes[0].className = "playing"
        } else {
            e.currentTarget.childNodes[0].pause();
            e.currentTarget.childNodes[0].className = "not_playing"
        }
    } 

    componentDidMount(){ 
        // debugger
        this.props.fetchUser(this.props.userId);
        this.props.fetchRecordings();
        // this.setState.userId = this.props.match.params.userId;
        // wavesurfer = WaveSurfer.create({
        //     container: '#waveform',
        //     waveColor: 'violet',
        //     progressColor: 'purple'
        // });
    }

    componentDidUpdate(prevProps){
        // debugger
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.setState({
                userId: this.props.match.params.userId
            });
            this.props.fetchUser(this.props.match.params.userId);
            this.props.fetchRecordings();
        }
    }

    render(){

        

        if(Object.keys(this.props.recordings).length < 1){
            // this.props.fetchRecordings()
            return(null)
        } else {

            let recordings = Object.values(this.props.recordings);
            recordings = recordings.filter(recording => recording["user_id"] === parseInt(this.state.userId));

            // wavesurfer.load(recordings[0].audioUrl);

            let recordingItems = recordings.map(recording => 
                <div className="recording-item" key={"recording-item" + recording.id}
                    onClick={this.playRecording}>
                    <audio className="not_playing">
                        <source src={recording.audioUrl} type="audio/mpeg"></source>
                    </audio>
                    <div className="recording-item-img" key={"recording-item-img" + recording.id}>
                        <img className="recording-art" src={recording.artUrl}/>
                        <img className="recording-item-play-button" src={window.playButtonURL}/>
                    </div>
                    <div className="recording-item-title" key={"recording-item-title" + recording.id}>
                        {recording.title}</div>
                    <div className="recording-item-user" key={"recording-item-user" + recording.id}>
                        {recording.username}</div>
                </div>)

                let backgroundImg = {
                    backgroundImage: 'url(' + this.props.userOfPage.portraitUrl + ')'
                };
                // debugger
                return(
                    <>
                        <section className="user-recordings">
                            <div className="user-page-banner" >
                                <div className="user-hero" style={backgroundImg}></div>
                                    <div className="user-portraitandname"> 
                                        <img className="user-hero-portrait" id="user-hero-portrait"
                                            src={this.props.userOfPage.portraitUrl}/>
                                        <h1 className="user-hero-name">{this.props.userOfPage.username}</h1>
                                    </div>
                            </div>
                            <ul className="user-recordings-list">
                                {recordingItems}
                            </ul>
                        </section>
                    </>
                )
            }
        }
    }

const msp = (state, ownProps) => {
    // debugger 
    return {
        recordings: state.entities.recordings,
        userId: ownProps.match.params.userId,
        // user: state.entities.users,  
        currentUser: state.entities.users[state.session.id],
        userOfPage: state.entities.users[ownProps.match.params.userId] ? state.entities.users[ownProps.match.params.userId] : {username: "", portraitUrl: ""}
    }
};

const mdp = dispatch => {
    return {
        fetchRecordings: () => dispatch(fetchRecordings()),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
};

export default connect(msp, mdp)(RecordingIndex)


