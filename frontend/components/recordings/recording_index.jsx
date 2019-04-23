import React from 'react';
import {connect} from 'react-redux';
import {fetchRecordings} from '../../actions/recordings_actions';
import {fetchUser} from '../../actions/user_actions';
import UserRecordingItem from '../recordings/user_recording_item';
import UserBanner from '../user/user_banner';
import Nav from '../nav';
import { receiveNewActiveRecording, receiveActiveRecording } from '../../actions/active_recording_actions';

class RecordingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recordings: this.props.recordings, 
            userId: this.props.userId,
            currentUser: this.props.currentUser,
            userOfPage: this.props.userOfPage
        }
    }

    componentDidMount(){ 
        this.props.fetchUser(this.props.userId);
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.setState({
                userId: this.props.match.params.userId
            });
            this.props.fetchUser(this.props.match.params.userId);
        }
    }

    render(){

        if(Object.keys(this.props.recordings).length < 1){
            return(null)
        } else {
            let recordings = Object.values(this.props.recordings);
            recordings = recordings.filter(recording => recording["user_id"] === parseInt(this.state.userId));

            let recordingItems = recordings.map(recording => 
                <div className="user-recording-item-div">
                    <UserRecordingItem recording={recording} key={recording.id} 
                        activeRecording={this.props.activeRecording} receiveActiveRecording={this.props.receiveActiveRecording}/>
                </div>
            )

            let backgroundImg = {
                backgroundImage: 'url(' + this.props.userOfPage.portraitUrl + ')'
            };
                return(
                    <>
                        <Nav/>
                        <UserBanner recordingItems={recordingItems} backgroundImg={backgroundImg}
                            userOfPage={this.props.userOfPage} />
                    </>
                )
            }
        }
    }

const msp = (state, ownProps) => {
    return {
        recordings: state.entities.recordings,
        userId: ownProps.match.params.userId,
        currentUser: state.entities.users[state.session.id],
        userOfPage: state.entities.users[ownProps.match.params.userId] ? state.entities.users[ownProps.match.params.userId] : {username: "", portraitUrl: ""},
        activeRecording: state.ui.activeRecording
    }
};

const mdp = dispatch => {
    return {
        fetchRecordings: () => dispatch(fetchRecordings()),
        fetchUser: userId => dispatch(fetchUser(userId)),
        receiveActiveRecording: args => dispatch(receiveActiveRecording(args))
    }
};

export default connect(msp, mdp)(RecordingIndex)


