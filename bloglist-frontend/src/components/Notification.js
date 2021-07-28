/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotification } from '../redux/actions/blogActions'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(removeNotification(null))
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notification, dispatch])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: '20px'
  }
  return (
    <div className={style}>
      { notification ?

        <div className="error">{notification}</div>
        :
        null}

      {/* <div className="container">
    {(notification &&
      <Alert variant="success">
        {notification}
      </Alert>
    )}
  </div> */}
    </div>
  )
}

export default Notification