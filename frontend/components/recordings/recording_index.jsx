import React from 'react';
import {connect} from 'react-redux';
import {fetchRecordings} from '../../actions/recordings_actions';
import {fetchUser} from '../../actions/user_actions';
import RecordingItem from '../recordings/recording_item';
import UserBanner from '../user/user_banner';
import Nav from '../nav';

class RecordingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recordings: this.props.title, 
            userId: this.props.userId,
            currentUser: this.props.currentUser,
            userOfPage: this.props.userOfPage
        }
    }

    componentDidMount(){ 
        this.props.fetchUser(this.props.userId);
        this.props.fetchRecordings();
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.setState({
                userId: this.props.match.params.userId
            });
            this.props.fetchUser(this.props.match.params.userId);
            this.props.fetchRecordings();
        }
    }

    render(){

        if(Object.keys(this.props.recordings).length < 1){
            return(null)
        } else {
            let recordings = Object.values(this.props.recordings);
            recordings = recordings.filter(recording => recording["user_id"] === parseInt(this.state.userId));

            let recordingItems = recordings.map(recording => 
                <RecordingItem recording={recording} key={recording.id}/>
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
        userOfPage: state.entities.users[ownProps.match.params.userId] ? state.entities.users[ownProps.match.params.userId] : {username: "", portraitUrl: ""}
    }
};

const mdp = dispatch => {
    return {
        fetchRecordings: () => dispatch(fetchRecordings()),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
};

export default connect(msp, mdp)(RecordingIndex)


