import React from 'react';
import {connect} from 'react-redux';
import { throws } from 'assert';
import {fetchRecordings} from '../../actions/recordings_actions'

class RecordingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recordings: this.props.title, 
            userId: this.props.userId
        }
        this.playRecording = this.playRecording.bind(this)
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
    }

    render(){
    if(Object.keys(this.props.recordings).length < 1){
        // debugger
        // this.props.fetchRecordings()
        return(null)
    } else {
        let recordings = Object.values(this.props.recordings);
        recordings = recordings.filter(recording => recording["user_id"] === parseInt(this.state.userId));
        // debugger 
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
            return(
                <section className="user-recordings">
                    <ul className="user-recordings-list">
                        {recordingItems}
                    </ul>
                </section>
            )
        }
    }
}

const msp = (state, ownProps) => {
    // debugger

    return {
        recordings: state.entities.recordings,
        userId: ownProps.match.params.userId
        // recordings: {},
        // userId: 15
    }
    // debugger
};

const mdp = dispatch => {
    return {
        fetchRecordings: () => dispatch(fetchRecordings())
    }
};

export default connect(msp, mdp)(RecordingIndex)


