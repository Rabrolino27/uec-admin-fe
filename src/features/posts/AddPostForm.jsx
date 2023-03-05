import {useDispatch} from 'react-redux';
import {AddPost} from './postSlice'
import {allUsers} from '../users/userSlice'
import {useSelector} from 'react-redux'
import React, {useState} from 'react'

const AddPostForm = () => {
    const users = useSelector(allUsers)
    const dispatch = useDispatch();
    const [name, setName] = useState('');   
    const [desc, setDesc] = useState('');
    const [userId, setUserId] = useState('');

  

    const handleSubmit = (e) =>{
        e.preventDefault();
            dispatch(
                AddPost(name, desc, userId)
            )
            setName('')
            setDesc('')
    } 

    const options = users.map((user) => (
        <option key={user.id} value={user.id} >{user.name}</option> 
    ));  
    // console.log(users);

  return (
    <div>
        <form> 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <select onChange={(e) => setUserId(e.target.value)} value={userId}>
            <option value=""></option> 
            {options}
        </select>
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button type="submit" onClick={handleSubmit} > Submit</button> 
        </form>
    </div>
  )
}

export default AddPostForm