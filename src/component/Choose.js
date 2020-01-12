import React from 'react';

class Choose extends React.Component {
    render() {
        return (
            <button  disabled={this.props.value.active}  onClick={this.props.handleAclick} >
                {this.props.value.text}
            </button>
        )
    }
}
export default Choose;