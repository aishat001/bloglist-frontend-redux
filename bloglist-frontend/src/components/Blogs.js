import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { initialBlogs } from '../redux/actions/blogActions'
import blogService from '../services/blogService'
import Togglable from './Togglable'

const Blogs = () => {
  const blogs = useSelector(state => state.blogReducer)
  const dispatch = useDispatch()

  useEffect( async() => {
    dispatch(initialBlogs(await blogService.getAll()))  }, [dispatch])

  console.log(blogs)
  return (
    <div className="">
      { []
        .concat(blogs)
        .map( blog =>
          <div className="blog" key={blog.id}>
            <div> Title: {blog.title}</div>
            <Togglable buttonLabel="view">
              <div> Link: {blog.url}</div>
              <div> Likes: {blog.likes}</div>
              <div> Written By: {blog.author}</div>
            </Togglable>

          </div>
        )
      }
    </div>
  )
}

export default Blogs