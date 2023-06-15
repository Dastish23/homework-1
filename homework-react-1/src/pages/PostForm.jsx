import React, { useState } from 'react'
import axios from 'axios'

const PostForm = () => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  const handleInput = (event) => {
    setPost({post,[event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', {post})
    .then(response => console.log(response))
  }

  return (
    <div className='PostForm'>
      <div>
          <form onSubmit={handleSubmit}>
            Message: <input type="text"  onChange={handleInput} name='title' />
            Post: <input type="text" onChange={handleInput} name='post' />
            <button className='btn'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default PostForm