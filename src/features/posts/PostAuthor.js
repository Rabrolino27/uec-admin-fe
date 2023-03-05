import {useSelector} from 'react-redux';
import {allUsers} from '../users/userSlice';
import React from 'react'

const PostAuthor = ({userId}) => {
    const users = useSelector(allUsers);

  const author =  users.find(user => user.id === userId);

  return (
    <span>{author ? author.name : 'Unknown Author'} </span>
  )
}

export default PostAuthor