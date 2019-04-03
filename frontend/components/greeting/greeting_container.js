import { connect } from 'react-redux';
import { logout, login} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Greeting from './greeting';
import { fetchSplashRecordings } from '../../actions/recordings_actions';

const mapStateToProps = ({ session, entities: { users, recordings } }) => {
    // debugger
    return {
        recordings: recordings,
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    demoLogin: demoUser => dispatch(login(demoUser)),
    fetchSplashRecordings: () => dispatch(fetchSplashRecordings())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);