import { VisibilityFilters } from '../actions'
/*action.filter会处理，返回结果给state*/
//store.visibilityFilter
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
