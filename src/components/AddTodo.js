import React from 'react';

const AddTodo = (props) => {
     return(
        <input ref={props.myRef} placeholder='please input anything you want~' />
     )
     //上面的箭头函数创建了一个组件内的全局变量 input？
}

export default AddTodo;