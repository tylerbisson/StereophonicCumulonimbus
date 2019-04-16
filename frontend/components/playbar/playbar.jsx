import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

class PlayBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="playbar">
                <div className="playbar-controlls">
                    <h1 className="playbar-time">0:00</h1>
                    <input className="playbar-progress-timeline" type="range"/>
                    <h1 className="playbar-time">0:00</h1>
                </div>
            </section>
        )
    };
};

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);