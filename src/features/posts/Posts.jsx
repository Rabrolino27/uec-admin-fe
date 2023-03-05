import {useSelector} from 'react-redux'
import { stateAll } from './postSlice'
import AddPostForm from './AddPostForm'
import PostAuthor from './PostAuthor'
import React from 'react'

const Posts = () => {
    const posts = useSelector(stateAll)
    
    const myPost = posts.map((post) => (
        <div>
        <p> {post.desc},  </p>
        <PostAuthor  userId={post.userId}/>
        </div>
        ));
  return (

    <div>
        <AddPostForm />
       {myPost}
        
        
        </div>
  )
}

export default Posts