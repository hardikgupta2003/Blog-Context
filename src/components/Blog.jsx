import React, { useContext } from 'react'
import App from '../App'
import AppContextProvider from '../context/AppContext'

const Blog = () => {
  const {posts,loading}= useContext(AppContext);
  return (
    <div>
      {
        loading? (<Spinner/>) : (
          posts.length===0 ?
          (<p>No Post Found</p>) : (posts.map((post)=> (

            
          )))
        )
      }
    </div>
  )
}

export default Blog