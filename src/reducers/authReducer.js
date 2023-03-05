import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
 name : "users",
 initialState: {
    user : {email : 'oo', name : 'bb', password : 'abc'}
},
reducers: { 
    userName : (state, action) => {
      state.user.name = action.payload.name;   
    },
    userEmail : (state, action) => {
        state.user.email = action.payload.email;   
      },
      userPass : (state, action) => {
        state.user.password = action.payload.password;   
      },
},
    


})


export const {userName, userPass, userEmail} = UserSlice.actions; 

export default UserSlice.reducer;

