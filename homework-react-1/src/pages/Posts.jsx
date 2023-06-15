import React, { useEffect, useState } from 'react'

const Posts = () => { 
  const [data, setData] = useState([])
  const url =  "https://jsonplaceholder.typicode.com/posts"
  useEffect(() =>{
    fetch(url).then(response => response.json()).then(json => {
      console.log('json', json)
      setData(json)
    }).catch(e => {
        console.log('e', e);
    }) 
  }, [])
  return (
    <div className='Post'>
      {
      data.map(item => {
        return(
          <div>{item.body}</div>     
        )
      })
    }
    </div>
     
  )
}

export default Posts