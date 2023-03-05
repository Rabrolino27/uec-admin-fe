import {createSlice} from '@reduxjs/toolkit'
const initialState = [
    {
        id: '1', name: 'Ade'
    },
    {
        id: '2', name: 'ope'
    },
]

const UserSlice = createSlice({
    name : 'users',
    initialState,
    reducer : {}
});

export const allUsers = (state) => state.users;
export default UserSlice.reducer;
