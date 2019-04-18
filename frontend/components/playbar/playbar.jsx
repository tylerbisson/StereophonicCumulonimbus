import { connect } from 'react-redux';
import React from 'react';

class PlayBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: this.props.activeRecording.currentTime
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
        // debugger 
        this.setState({
            currentTime: this.props.activeRecording.currentTime
        });
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.activeRecording !== this.props.activeRecording) {
            this.setState({
                currentTime: this.props.activeRecording.currentTime
            });
        }
    }

    progress(){
        // debugger
        let progressPercent = Math.floor((this.state.currentTime / this.props.activeRecording.recordingDuration) * 100);
        return { width: `${progressPercent}%` }
    }

    render() {
        return(
            <section className="playbar">
                <div className="playbar-controlls">
                    <div className="playbar-playpausenext">
                        <img className="playbar-next-button-rev" src={window.nextButtonUrl} />
                        <img className="playbar-play-button" src={window.littlePlayButtonUrl}/>
                        {/* <img className="playbar-pause-button" src={window.pauseButtonUrl}/> */}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);