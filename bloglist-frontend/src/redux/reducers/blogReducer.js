import { ActionTypes } from '../constants/action-types'


const blogReducer = (state = [], action) => {
  switch (action.type) {
  case ActionTypes.INITIAL_BLOGS:
    return action.blogs
  case ActionTypes.CREATE_BLOG:
    return [...state, action.newBlog]
  case 'REMOVE_BLOG':
    return state
  case 'LIKE':
    return state
  default:
    return state
  }
}

export default blogReducer