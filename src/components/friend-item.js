import React, { Component, PropTypes } from 'react';

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

FriendItem.propTypes = {
    id: PropTypes.int.isRequired,
    name: PropTypes.string.isRequired,
    onRemoveClick: PropTypes.func.isRequired
};

export default FriendItem;