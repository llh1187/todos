import React from 'react';
import List from '../components/List';
import { connect } from 'react-redux'

/*const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}*/

/*const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}*/

class VisibleTodoList extends React.Component {

    render() {
        const index = this.props.index;
        let list;
        if (index == 0) {
            list = this.props.list;
        } else if (index == 1) {
            list = this.props.list.filter((value) => value.completed == true)
        } else if (index == 2) {
            list = this.props.list.filter((value) => value.completed == false)
        }
        return (
            <List list={list} handleClick={this.props.handleClick}/>
        )
    }
}

export default VisibleTodoList;