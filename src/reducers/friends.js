export default (
    state = [],
    action
) => {
    // Remember it needs to be immutable objects Object.assign
    switch (action.type) {
        case 'REMOVE_FRIEND':
            state = state.filter(friend => friend.id !== action.id);

            return [
                ...state
            ];
        case 'ADD_FRIEND':
            let id;

            if (!state.length) {
                id = 1;
            } else {
                id = state[state.length - 1].id + 1;
            }

            return [
                ...state,
                {
                    name: action.name,
                    id: id
                }
            ]
        default:
            // Always return a state
            return state;
    }
};