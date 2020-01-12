import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
	 let input;
	 return(
	 	<form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
    	}}>
        <input ref={node => input = node} placeholder='please input anything you want~' />
	    </form>
	 )
	 //上面的箭头函数创建了一个组件内的全局变量 input？
}

export default connect()(AddTodo);