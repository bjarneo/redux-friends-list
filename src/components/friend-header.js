import React, { Component, PropTypes } from 'react';

class FriendHeader extends Component {
    render() {
        const { onAddClick } = this.props;

        return (
            <div>
                <h1>Hello, friends.</h1>
                <input type="text" ref="input" />
                <button onClick={(e) => {
                    e.preventDefault();

                    const input = this.refs.input;

                    onAddClick(input.value);

                    input.value = '';
                }}>++</button>
            </div>
        );
    }
}


FriendHeader.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default FriendHeader;