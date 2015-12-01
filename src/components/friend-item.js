import React, { Component } from 'react';

class FriendItem extends Component {
    render() {
        const { id, name, onRemoveClick } = this.props;

        return (
            <li>
                <span>{name}</span>
                <button onClick={(e) => {
                    e.preventDefault();

                    onRemoveClick(id);
                }}>
                    --
                </button>
            </li>
        );
    }
}

export default FriendItem;
