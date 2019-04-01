import React from 'react';
import {connect} from 'react-redux';
import { throws } from 'assert';
import {fetchRecordings} from '../../actions/recordings_actions'

class RecordingIndex extends React.Component {
    constructor(props) {
        super(props);
        // window.fetchRecordings = this.props.fetchRecordings
        // this.state = this.props.recordings;
    }

    componentDidMount(){   
        // console.log("componentDidMount")
        // console.log(new Date().getMilliseconds())
        // console.log()
        // this.props.fetchRecordings()
    }

    render(){
        // console.log("render")
        // console.log(new Date().getMilliseconds())
    // debugger
    // console.log(this.props.recordings)
    // console.log("this.props.recordings")
    // console.log(Array.isArray(Object.values(this.props.recordings)));

    // debugger
    if(Object.keys(this.props.recordings).length < 1){
        // debugger
        // this.props.fetchRecordings()
        return(null)
    } else {
        let recordings = Object.values(this.props.recordings);
        let recordingItems = recordings.map(recording => 
            <div className="recording-item"key={recording.id}>
                {recording.title}</div>)
            return(
                <section className="user-recordings">
                    <ul className="user-recordings-list">
                        {recordingItems}
                        {/* {"heelpp"} */}
                    </ul>
                </section>
            )
        }
    }
}

const msp = (state, ownProps) => {
    // debugger
    return {
        recordings: state.entities.recordings,
        userId: ownProps.match.params.userId
        // recordings: {},
        // userId: 15
    }
    // debugger
};

const mdp = dispatch => {
    return {
        fetchRecordings: () => dispatch(fetchRecordings())
    }
};

export default connect(msp, mdp)(RecordingIndex)


