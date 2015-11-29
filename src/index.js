import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import friendsReducer from './reducers/friends';
import Friends from './friends';

// If more than one reducer we need to combineReducers in order to make it work
let store = createStore(friendsReducer);

// Wrap our root component in Provider to make our store instance available to
// all components. Internally, this is done via React's context.
ReactDOM.render(
    <Provider store={store}>
        <Friends />
    </Provider>,
    document.getElementById('root')
);