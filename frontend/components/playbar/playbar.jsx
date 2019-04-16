import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

class PlayBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section class="playbar">
                <div class="playbar-controlls">
                    <h1 class="playbar-time">0:00</h1>
                    <input className="playbar-progress-timeline" type="range"/>
                    <h1 class="playbar-time">0:00</h1>
                </div>
            </section>
        )
    };
};

const mapStateToProps = ({ session, entities: { users, recordings } }) => {
    return {
    };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);