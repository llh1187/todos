import React from 'react';
import { toggleTodo } from '../actions'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
/*拆分得非常好*/
/*filter是一个过滤函数，不改变原数组，返回结果（新数组）*/
/*TodoList实际上要处理输入框输入的字符，以及点击之后有横线，还要判断底下的三个按钮，决定怎么显示*/
/*最复杂的一个组件*/
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
    //返回t.completed为false的项
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
/*state是k,k不需要理解  v才是最重要的 dont make mistake*/
/*sotre传进来的state dispatch 经过connect传进来？*/
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

/*function mapStateToProps(state) {
  return {
    todos:getVisibleTodos(state.todos, state.visibilityFilter);
  }
}*/

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
/*把组件和State连起来*/
/*把todos toggleTodo这两个key传给TodoList*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)