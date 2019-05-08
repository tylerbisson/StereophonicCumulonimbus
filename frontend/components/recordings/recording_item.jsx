import React from 'react';
import { Link } from 'react-router-dom';

class RecordingItem extends React.Component {
    constructor(props) {
        super(props);
        // this.handlePlayPause = this.handlePlayPause.bind(this);
    }

    // handlePlayPause() {
    //     //tests if waveForm is loaded 
    //     // if (this.waveForm.getDuration()) {
    //         if (this.progress || this.props.activeRecording.progressTimer) {
    //             clearInterval(this.progress);
    //             clearInterval(this.props.activeRecording.progressTimer)
    //             this.progress = null;
    //             if (this.props.recording.id !== this.props.activeRecording.recordingId) {
    //                 this.props.receiveActiveRecording([
    //                     this.props.activeRecording.recordingElement,
    //                     this.props.activeRecording.recordingId,
    //                     this.props.activeRecording.recordingDuration,
    //                     this.props.activeRecording.currentTime,
    //                     this.props.activeRecording.progressTimer,
    //                     false, 
    //                     true]);

    //                 this.progress = setInterval(() =>
    //                     this.props.receiveActiveRecording(
    //                         [this.waveForm,
    //                         this.props.recording.id,
    //                         this.waveForm.getDuration(),
    //                         this.waveForm.getCurrentTime(),
    //                         this.progress,
    //                             true]),
    //                     500);

    //                 this.setState(() => {
    //                     return ({ playButtonImg: window.bigPauseButtonUrl })
    //                 })
    //             } else {
    //                 this.props.receiveActiveRecording([
    //                     this.waveForm,
    //                     this.props.recording.id,
    //                     this.waveForm.getDuration(),
    //                     this.waveForm.getCurrentTime(),
    //                     this.progress,
    //                     false]);

    //                 this.setState(() => {
    //                     return ({ playButtonImg: window.playButtonURL })
    //                 })
    //             }
    //         } else {
    //             this.progress = setInterval(() =>
    //                 this.props.receiveActiveRecording(
    //                     [this.waveForm,
    //                     this.props.recording.id,
    //                     this.waveForm.getDuration(),
    //                     this.waveForm.getCurrentTime(),
    //                     this.progress,
    //                         true]),
    //                 500);

    //             this.setState(() => {
    //                 return ({ playButtonImg: window.bigPauseButtonUrl })
    //             })
    //         }
    //     // }
    // }

    componentDidMount() {
        // this.props.fetchRecording(this.props.match.params.recordingId);
        this.waveForm = WaveSurfer.create({
            container: '#audio-waveForm',
        });
        this.waveForm.load(this.props.recording.audioUrl);
        // this.props.receiveActiveRecording([this.waveForm, this.props.recording.id, this.waveForm.getDuration(), this.waveForm.getCurrentTime()]);
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

                <div className="recording-item-img" key={"recording-item-img" + this.props.recording.id}
                onClick={this.handlePlayPause}>
                    <img className={art} src={this.props.recording.artUrl}/>
                    {/* {playbutton} */}
                </div>

                {link}

                {username}
                <div className="invisible-waveform" id="audio-waveForm"></div>
            </div>
        )
    }
}

export default RecordingItem;

