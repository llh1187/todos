import React from 'react';
import { connect } from 'react-redux';

class AddTodo extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleInput}>
                <input className='SI' placeholder='please input anything you want~' ref={this.props.myRef}/> 
            </form>
        );
    }
}

export default AddTodo;