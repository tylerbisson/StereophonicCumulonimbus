import { connect } from 'react-redux';
import React from 'react';
import { receiveActiveRecording } from '../../actions/active_recording_actions';


class PlayBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: this.props.activeRecording.currentTime,
            playPauseButton: window.littlePlayButtonUrl
        }
        this.handlePlayPause = this.handlePlayPause.bind(this);
    }

    handlePlayPause() {
        if (this.props.activeRecording.recordingElement.getDuration()) {
            if (this.progressInt || this.props.activeRecording.progressTimer) {
                clearInterval(this.progressInt);
                clearInterval(this.props.activeRecording.progressTimer)
                this.progressInt = null;
                this.props.receiveActiveRecording(
                    [this.props.activeRecording.recordingElement,
                    this.props.activeRecording.recordingId,
                    this.props.activeRecording.recordingElement.getDuration(),
                    this.props.activeRecording.recordingElement.getCurrentTime(),
                    this.progressInt,
                    false]);

                this.setState(() => {
                    return ({ playPauseButton: window.littlePlayButtonUrl })
                })
            } else {
                this.progressInt = setInterval(() =>
                    this.props.receiveActiveRecording(
                        [this.props.activeRecording.recordingElement,
                        this.props.activeRecording.recordingId,
                        this.props.activeRecording.recordingElement.getDuration(),
                        this.props.activeRecording.recordingElement.getCurrentTime(),
                        this.progressInt,
                        true]),
                    500);

            this.setState(() => {
                return ({ playPauseButton: window.pauseButtonUrl})
            })
            }
        }
    }

    formatTime(raw){
        if(raw){
            let minutes = Math.floor(raw / 100)
            let seconds = Math.floor(raw % 100)
            if (seconds < 10){
                seconds = `0${seconds.toString()}`
            }
            return `${minutes}:${seconds}`
        } else{
            return "0:00"
        }
    }

    componentDidMount(){
        this.setState({
            currentTime: this.props.activeRecording.currentTime
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeRecording !== this.props.activeRecording) {
            this.setState({
                currentTime: this.props.activeRecording.currentTime
            });
        }
        if (prevProps.activeRecording.progressTimer !== this.props.activeRecording.progressTimer) {
            if(this.props.activeRecording.progressTimer){
                this.setState({
                    playPauseButton: window.pauseButtonUrl
                });
            } else {
                this.setState({
                    playPauseButton: window.littlePlayButtonUrl
                });
            }
        }
    }

    progress(){
        let progressPercent = Math.floor((this.state.currentTime / this.props.activeRecording.recordingDuration) * 100);
        return { width: `${progressPercent}%` }
    }

    render() {
        return(
            <section className="playbar">
                <div className="playbar-controlls">
                    <div className="playbar-playpausenext">
                        <img className="playbar-next-button-rev" src={window.nextButtonUrl} />
                        <img className="playbar-play-button" src={this.state.playPauseButton}
                            onClick={this.handlePlayPause}/>
                        <img className="playbar-next-button" src={window.nextButtonUrl}/>
                    </div>
                    <h1 className="playbar-time">{this.formatTime(this.state.currentTime)}</h1>
                    <div className="playbar-progress-timelines">
                        <input className="playbar-progress-timeline-background" type="range"/>
                        <input className="playbar-progress-timeline-foreground" type="range" style={this.progress()}/>
                    </div>
                    <h1 className="playbar-time">{this.formatTime(this.props.activeRecording.recordingDuration)}</h1>
                </div>
            </section>
        )
    };
};

const mapStateToProps = state => {
    return {
        activeRecording: state.ui.activeRecording
    };
};

const mapDispatchToProps = dispatch => ({
    receiveActiveRecording: args => dispatch(receiveActiveRecording(args))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);