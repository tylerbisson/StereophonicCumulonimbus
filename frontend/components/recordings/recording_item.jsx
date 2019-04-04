import React from 'react';
import { Link } from 'react-router-dom';

const RecordingItem = ({recording, playRecording}) => {
    return (
        <div className="recording-item" key={"recording-item" + recording.id} onClick={playRecording}>

            <audio className="not_playing">
                <source src={recording.audioUrl} type="audio/mpeg"></source>
            </audio>

            <div className="recording-item-img" key={"recording-item-img" + recording.id}>
                <img className="recording-art" src={recording.artUrl}/>
                <img className="recording-item-play-button" src={window.playButtonURL}/>
            </div>

            <div className="recording-item-title" key={"recording-item-title" + recording.id}>
                {recording.title}
            </div>

            <div className="recording-item-user" key={"recording-item-user" + recording.id}>
                {recording.username}
            </div>

        </div>
    )
}

export default RecordingItem;

