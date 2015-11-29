import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import addFriend from './action-creators/add-friend';
import removeFriend from './action-creators/remove-friend';
import FriendHeader from './components/friend-header';
import FriendList from './components/friend-list';

class Friends extends Component {
    render() {
        const { dispatch, friends } = this.props;

        return (
            <div>
                <FriendHeader
                    onAddClick={(name) =>
                        dispatch(addFriend(name))
                    } />

                <FriendList
                    friends={friends}
                    onRemoveClick={(index) =>
                        dispatch(removeFriend(index))
                    } />
            </div>
        );
    }
}

Friends.propTypes = {
    dispatch: PropTypes.func.isRequired,
    friends: PropTypes.array.isRequired
};

// Map state to props
const select = (state) => {
    return {
        friends: state
    }
};

// Connect a react component to the Redux store
export default connect(select)(Friends);
