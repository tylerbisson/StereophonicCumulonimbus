import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import recordingsReducer from './recordings_reducer';
import commentsReducer from './comments_reducer'

export default combineReducers({
    users: usersReducer,
    recordings: recordingsReducer,
    comments: commentsReducer
});
