import { connect } from 'react-redux';
import { fetchSplashRecordings } from '../../actions/recordings_actions';
import React from 'react';
import Nav from '../nav';
import DiscoverRow from './discover-row'
import RecordingItem from '../recordings/recording_item'
import { Link } from 'react-router-dom';


class Discover extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSplashRecordings();
    }

    // componentDidUpdate(prevProps) {
    // }

    render() {
        let recordingItems = null;
        if (Object.keys(this.props.recordings).length < 1 === false){
            let recordings = Object.values(this.props.recordings);
            recordingItems = recordings.map(recording =>
                <RecordingItem recording={recording} key={recording.id} />)
        }

        let drOne = recordingItems.slice(0, 4);
        let drTwo = recordingItems.slice(4, 8);
        let drThree = recordingItems.slice(8, 12);

        let recommendedArtistLinks = null;
        if (Object.keys(this.props.recordings).length < 1 === false){
            let recordings = Object.values(this.props.recordings);
            recommendedArtistLinks = recordings.map(recording =>
                <div className="recommended-artist" key={recording.id}> 
                    <img className="recommended-artist-portrait" src={recording.portraitUrl}/>
                    <h2 className="recommended-artist-username">{recording.username}</h2>
                    <Link className="recommended-artist-visit-button"
                        to={`/users/${recording.user_id}`}>
                        Visit
                    </Link>
                </div>)
        }

        return (
            <>
                <Nav/>
                <section className="discover">
                    <div className="discover-rows">
                        <DiscoverRow name="The Launch" 
                        subtitle="Music to get the week started" recordingItems={drOne}/>
                        <DiscoverRow name="The Zone" 
                        subtitle="Tracks for work, study and life" recordingItems={drTwo}/>
                        <DiscoverRow name="The Jam" 
                        subtitle="Bangers, Bops and Slappers..." recordingItems={drThree}/>
                    </div>
                    <div className="discover-sidebar">
                        <h1 className="discover-sidebar-recommended-profiles-label">
                            Recommended Profiles
                        </h1>
                        <ul>
                            {recommendedArtistLinks}
                        </ul>
                    </div>
                </section>
            </>
        )
    };
};

const mapStateToProps = ({ session, entities: { users, recordings } }) => {
    return {
        recordings: recordings,
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchSplashRecordings: () => dispatch(fetchSplashRecordings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);

