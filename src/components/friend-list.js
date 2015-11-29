import React, { Component, PropTypes } from 'react';
import FriendItem from './friend-item';

class FriendList extends Component {
    render() {
        const { friends, onRemoveClick } = this.props;

        return (
            <ul>
                {friends.map((friend) => {
                    return <FriendItem
                                key={friend.id}
                                {...friend}
                                onRemoveClick={onRemoveClick}
                                />;
                })}
            </ul>
        );
    }
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}

export default FriendList;

