/*抽取dispatch发送的action中重复的代码到这里，以DRY，这样子在容器组件dispatch的时候可以只写dispatch(addTodo(text))*/
/*nextTodoId 局部变量 相当于闭包引用它？*/
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
/*这里更妙，把过滤方法也传过去了*/
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
