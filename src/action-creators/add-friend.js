import { ADD_FRIEND } from '../actions/action-types';

export default (name) => {
    return {
        type: ADD_FRIEND,
        name
    }
};