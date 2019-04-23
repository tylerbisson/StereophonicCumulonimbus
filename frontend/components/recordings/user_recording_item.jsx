import React from 'react';
import { Link } from 'react-router-dom';
import WaveSurfer from 'wavesurfer.js';

class UserRecordingItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.waveForm = WaveSurfer.create({
            container: `#user-audio-waveForm${this.props.recording.id}`,
            waveColor: '#b2b4b7',
            progressColor: '#ff540a',
            barWidth: 2,
            height: 60,
            fillParent: true,
            normalize: true,
            cursorWidth: 0
        });   
        this.waveForm.load(this.props.recording.audioUrl);
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePlayPause = this.handlePlayPause.bind(this);
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.recording !== this.props.recording) {
            this.waveForm.load(this.props.recording.audioUrl);
        }

        if (this.waveForm.getCurrentTime() >= this.waveForm.getDuration()) {
            clearInterval(this.progress);
            this.progress = null;
        }
    }

    handlePlay() {
        // this.waveForm.play();
        // if (this.progress === null) {
        //     this.progress = setInterval(() =>
        //         this.props.receiveActiveRecording(
        //             [this.waveForm,
        //             this.props.recording.id,
        //             this.waveForm.getDuration(),
        //             this.waveForm.getCurrentTime(),
        //             this.progress]),
        //         500);
        // }
        // debugger
        if (this.props.activeRecording && this.props.recording.id !== this.props.activeRecording.recordingId) {
            clearInterval(this.progress);
            clearInterval(this.props.activeRecording.progressTimer);
            // debugger

            this.props.receiveActiveRecording([
                this.props.activeRecording.recordingElement,
                this.props.activeRecording.recordingId,
                this.props.activeRecording.recordingDuration,
                this.props.activeRecording.currentTime,
                this.props.activeRecording.progressTimer,
                "stop"]);
        }
        // debugger

        if (this.progress === null) {
            // debugger
            this.progress = setInterval(() => 
                this.props.receiveActiveRecording(
                    [this.waveForm,
                    this.props.recording.id,
                    this.waveForm.getDuration(),
                    this.waveForm.getCurrentTime(),
                    this.progress,
                        true]),
                500);
            // debugger

            // this.setState(() => {
            //     return ({ playButtonImg: window.bigPauseButtonUrl })
            // })
        }
    }

    handlePlayPause() {
        // console.log("yo");
        // debugger
        //tests if waveForm is loaded 
        // if (this.waveForm.getDuration()) {
        //     this.waveForm.playPause();
        //     if (this.progress) {
        //         clearInterval(this.progress);
        //         this.progress = null;
        //     } else {
        //         this.progress = setInterval(() =>
        //             this.props.receiveActiveRecording(
        //                 [this.waveForm,
        //                 this.props.recording.id,
        //                 this.waveForm.getDuration(),
        //                 this.waveForm.getCurrentTime(),
        //                 this.progress]),
        //             500);
        //     }
        // }
        debugger
        if (this.waveForm.getDuration()) {
            if (this.progress || this.props.activeRecording.progressTimer) {
                clearInterval(this.progress);
                clearInterval(this.props.activeRecording.progressTimer)
                this.progress = null;
                debugger
                if (this.props.recording.id !== this.props.activeRecording.recordingId) {
                    debugger
                    this.props.receiveActiveRecording([
                        this.props.activeRecording.recordingElement,
                        this.props.activeRecording.recordingId,
                        this.props.activeRecording.recordingDuration,
                        this.props.activeRecording.currentTime,
                        this.props.activeRecording.progressTimer,
                        "stop"]);

                    this.progress = setInterval(() =>
                        this.props.receiveActiveRecording(
                            [this.waveForm,
                            this.props.recording.id,
                            this.waveForm.getDuration(),
                            this.waveForm.getCurrentTime(),
                            this.progress,
                                true]),
                        500);

                    this.setState(() => {
                        return ({ playButtonImg: window.bigPauseButtonUrl })
                    })
                } else {
                    this.props.receiveActiveRecording([
                        this.waveForm,
                        this.props.recording.id,
                        this.waveForm.getDuration(),
                        this.waveForm.getCurrentTime(),
                        this.progress,
                        false]);

                    this.setState(() => {
                        return ({ playButtonImg: window.playButtonURL })
                    })
                }
            } else {
                this.progress = setInterval(() =>
                    this.props.receiveActiveRecording(
                        [this.waveForm,
                        this.props.recording.id,
                        this.waveForm.getDuration(),
                        this.waveForm.getCurrentTime(),
                        this.progress,
                            true]),
                    500);

                // this.setState(() => {
                //     return ({ playButtonImg: window.bigPauseButtonUrl })
                // })
            }
        }
    }

    render(){

        let art = "";
        let test = null;
        let playbutton = null;
        let link = null;
        let username = null;
        let wave;
        let durationTag;

        if(this.props.recordingShow){
            art = "recording-art-show";
        } else {
            art = "recording-art";
            link = 
                <Link to={`/recordings/${this.props.recording.id}`} className="user-recording-item-title"
                    key={"user-recording-item-title" + this.props.recording.id}>
                    {this.props.recording.title}
                </Link>;
            username = 
                <div className="user-recording-item-user" key={"user-recording-item-user" + this.props.recording.id}>
                    {this.props.recording.username}
                </div>;
            wave = 
                <div className="user-audio-waveForm-div">
                    <div className='user-audio-waveForm' id={`user-audio-waveForm${this.props.recording.id}`}
                        onClick={this.handlePlay}></div>
                </div>
        };

        if(this.waveForm){
            if (this.waveForm.getDuration() !== 0){
                durationTag =
                    <h3 className="user-recording-duration-tag">{this.waveForm.getDuration()}</h3>
            }
        
        }

        return (
            <>
                <div className="user-recording-item" key={"recording-item" + this.props.recording.id}>
                    
                    {test}
                    
                    <audio className="not_playing">
                        <source src={this.props.recording.audioUrl} type="audio/mpeg"></source>
                    </audio>

                    <div className="recording-item-img" key={"recording-item-img" + this.props.recording.id}>
                        <img className={art} src={this.props.recording.artUrl}/>
                        {playbutton}
                    </div>
                </div>
                <div className="user-recording-info">
                    <div className="user-recording-playbuttonandnameandtitle">
                        <img className="user-waveform-play-button" src={window.playButtonURL} onClick={this.handlePlayPause} />
                        <div>
                            {link}
                            {username}
                        </div>
                    </div>
                    {wave}
                    {/* {durationTag} */}
                </div>
            </>
        )
    }
}

export default UserRecordingItem;

