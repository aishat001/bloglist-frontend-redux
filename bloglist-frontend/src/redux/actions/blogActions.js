import blogService from '../../services/blogService'
import { ActionTypes } from '../constants/action-types'

export const initialBlogs = (blogs) => {
  return {
    type: ActionTypes.INITIAL_BLOGS,
    blogs,
  }
}
export const fetchBlogFromDb = async () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch(initialBlogs(blogs))
  }
}

export const createBlog = (newBlog) => {
  return {
    type: ActionTypes.CREATE_BLOG,
    newBlog,
  }
}

export const createBlogInDb = async () => {
  return async dispatch => {
    const newBlog = await blogService.create()
    dispatch(createBlog(newBlog))
  }
}

export const removeBlog = (blogs) => {
  return {
    type: ActionTypes.REMOVE_BLOG,
    data: blogs,
  }
}

export const setNotification = (message) => {
  return {
    type: ActionTypes.SET_NOTIFICATION,
    payload: {
      message,
    }
  }
}

export const removeNotification = () => {
  return {
    type: ActionTypes.REMOVE_NOTIFICATION,
  }
}