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
                <h1>hey there mr</h1>
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