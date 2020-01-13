import React from 'react';
import Todo from './Todo'

/*前面VisbleTodoList调用的时候，实际上这样子的：
connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
也就是是说Store上面有todos,toggleTodo这两个对象。
*/
/*{...todo}把参数都解析出来*/
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList;