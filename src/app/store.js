import {configureStore} from '@reduxjs/toolkit';
// import postsReducer from '../features/posts/postSlice'
import authReducer from '../reducers/authReducer';


export const store = configureStore({
    reducer : {
        auth: authReducer
    }
});