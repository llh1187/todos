import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const AddTodoContainer = ({ dispatch }) => {
    let textInput = React.createRef();
    return(
        <form onSubmit={e => {
        e.preventDefault()
        if (!textInput.current.value.trim()) {
            return
        }
        dispatch(addTodo(textInput.current.value))
        textInput.current.value = ''
        }}>
        <AddTodo myRef={textInput} placeholder='please input anything you want~' />
        </form>
    )
}

export default connect()(AddTodoContainer);