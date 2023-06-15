import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Posts from '../pages/Posts'
import PostForm from '../pages/PostForm'
import NotFound from '../pages/NotFound'



const Layout = () => {
  return (
    <>
        <nav className='nav'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Settings</li>
                <li>Contact</li>
            </ul>
            <nav className='navbar'>
                <ul>
                    <li><Link to={'/posts'}>Posts</Link> </li>
                    <li><Link to={'/postform'}>PostForm</Link> </li>
                    <li><Link to={'*'}>404</Link> </li>
                </ul>
            </nav>


        <Routes>
          <Route path='/posts' element={<Posts />} />
          <Route path='/postform' element={<PostForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </nav>
         <footer>
            Footer
         </footer>
    </>
  )
}

export default Layout