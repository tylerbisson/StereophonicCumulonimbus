import React from 'react';
import { Link } from 'react-router-dom';

class RecordingItem extends React.Component {
    constructor(props) {
        super(props);
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

    render(){
        return (
            <div className="recording-item" key={"recording-item" + this.props.recording.id} 
                onClick={this.playRecording}>

                <audio className="not_playing">
                    <source src={this.props.recording.audioUrl} type="audio/mpeg"></source>
                </audio>

                <div className="recording-item-img" key={"recording-item-img" + this.props.recording.id}>
                    <img className="recording-art" src={this.props.recording.artUrl}/>
                    <img className="recording-item-play-button" src={window.playButtonURL}/>
                </div>

                <Link to={`/recordings/${this.props.recording.id}`} className="recording-item-title" 
                    key={"recording-item-title" + this.props.recording.id}>
                    {this.props.recording.title}
                </Link>

                <div className="recording-item-user" key={"recording-item-user" + this.props.recording.id}>
                    {this.props.recording.username}
                </div>

            </div>
        )
    }
}

export default RecordingItem;

