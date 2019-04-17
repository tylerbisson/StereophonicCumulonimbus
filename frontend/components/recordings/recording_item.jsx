import React from 'react';
import { Link } from 'react-router-dom';

class RecordingItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

        let art = "";
        let test = null;
        let playbutton = null;
        let link = null;
        let username = null;

        if(this.props.recordingShow){
            art = "recording-art-show";
        } else {
            art = "recording-art";
            playbutton = 
                <img className="recording-item-play-button" src={window.playButtonURL} />;
            link = 
                <Link to={`/recordings/${this.props.recording.id}`} className="recording-item-title"
                    key={"recording-item-title" + this.props.recording.id}>
                    {this.props.recording.title}
                </Link>;
            username = 
                <div className="recording-item-user" key={"recording-item-user" + this.props.recording.id}>
                    {this.props.recording.username}
                </div>;
        };

        return (
            <div className="recording-item" key={"recording-item" + this.props.recording.id}>
                
                {test}
                
                <audio className="not_playing">
                    <source src={this.props.recording.audioUrl} type="audio/mpeg"></source>
                </audio>

                <div className="recording-item-img" key={"recording-item-img" + this.props.recording.id}>
                    <img className={art} src={this.props.recording.artUrl}/>
                    {playbutton}
                </div>

                {link}

                {username}
            </div>
        )
    }
}

export default RecordingItem;

