import React from 'react';
import {connect} from 'react-redux';
import { throws } from 'assert';
import {fetchRecordings} from '../../actions/recordings_actions'

class RecordingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recordings: this.props.title, 
            userId: this.props.userId,
            currentUser: this.props.currentUser
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

    // getAverageRGB(imgEl) {

    //     var blockSize = 5, // only visit every 5 pixels
    //         defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    //         canvas = document.createElement('canvas'),
    //         context = canvas.getContext && canvas.getContext('2d'),
    //         data, width, height,
    //         i = -4,
    //         length,
    //         rgb = { r: 0, g: 0, b: 0 },
    //         count = 0;

    //     if (!context) {
    //         return defaultRGB;
    //     }

    //     height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    //     width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    //     context.drawImage(imgEl, 0, 0);

    //     try {
    //         data = context.getImageData(0, 0, width, height);
    //     } catch (e) {
    //         /* security error, img on diff domain */alert('x');
    //         return defaultRGB;
    //     }

    //     length = data.data.length;

    //     while ((i += blockSize * 4) < length) {
    //         ++count;
    //         rgb.r += data.data[i];
    //         rgb.g += data.data[i + 1];
    //         rgb.b += data.data[i + 2];
    //     }

    //     // ~~ used to floor values
    //     rgb.r = ~~(rgb.r / count);
    //     rgb.g = ~~(rgb.g / count);
    //     rgb.b = ~~(rgb.b / count);

    //     return rgb;
    // }

    componentDidMount(){ 
        // var rgb = this.getAverageRGB(this.props.currentUser.portraitUrl);
        // document.body.style.backgroundColor = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')'; 
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

            let backgroundImg = {
                backgroundImage: 'url(' + this.props.currentUser.portraitUrl + ')'
            };

            return(
                <>
                    <section className="user-recordings">
                        <div className="user-page-banner" >
                            <div className="user-hero" style={backgroundImg}></div>
                                <div className="user-portraitandname"> 
                                    <img className="user-hero-portrait" id="user-hero-portrait"
                                        src={this.props.currentUser.portraitUrl}/>
                                    <h1 className="user-hero-name">{this.state.currentUser.username}</h1>
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
        user: state.entities.users,  
        currentUser: state.entities.users[state.session.id]
    }
    // debugger
};

const mdp = dispatch => {
    return {
        fetchRecordings: () => dispatch(fetchRecordings())
    }
};

export default connect(msp, mdp)(RecordingIndex)


