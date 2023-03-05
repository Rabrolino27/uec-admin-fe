import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1', name: 'Bryms', desc : 'hhhhnd sknda jsknakc kknas d md ms  ajna sc smcm m a aajndj a acja a camc ajj as a ja a '
    },
    {
        id: '2', name: 'Olly', desc : 'hhhhnd sknda jsknakc kknas d md ms  ajna sc smcm m a aajndj a acja a camc ajj as a ja a '
    }
];

    const postsSlice = createSlice ({
        name : 'posts',
        initialState,
        reducers : {
            AddPost:{
                reducer(state, action) {
                    state.push(action.payload);
                },
                prepare(name, desc, userId){
                    return {
                        payload : {
                            id : nanoid(),
                            name,
                            desc,
                            userId
                        }
                    }
                }
            }, 
        }
    }) 

    export const stateAll = (state) => state.posts;
    export const {AddPost} = postsSlice.actions
    export default postsSlice.reducer