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
//这里并没有connect某一个映射的函数，就是将Redux store state 映射到展示组件的 props 中
/*因为这里没有引用到别的组件 是自己本身的组件*/
export default connect()(AddTodoContainer);