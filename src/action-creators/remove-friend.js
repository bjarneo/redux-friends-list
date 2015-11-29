import { REMOVE_FRIEND } from '../actions/action-types';

export default (id) => {
    return {
        type: REMOVE_FRIEND,
        id
    }
};