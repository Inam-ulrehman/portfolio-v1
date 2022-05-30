import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1 className='title'>404 page not found..</h1>
      <div className='btn-container'>
        <Link to='/' className='btn'>
          Back to home page
        </Link>
      </div>
    </div>
  )
}

export default Error
