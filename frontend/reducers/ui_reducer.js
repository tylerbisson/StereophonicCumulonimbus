import { combineReducers } from 'redux';
import modal from './modal_reducer';
import activeRecordingReducer from './active_recording_reducer';

export default combineReducers({
    modal,
    activeRecording: activeRecordingReducer
});
