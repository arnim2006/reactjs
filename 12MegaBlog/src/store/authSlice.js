// step 2 for store
// this store will track all the authentication means whether the user is logged in(authenticated) or not


import { createSlice } from "@reduxjs/toolkit";

// by default, the user is not logged in
// so we will set the initial state of the store to false
const initialState = {
    status : false,
    userData: null
}


const authSlice = createSlice({
    name: "auth",  // name of the slice
    initialState, // initial state of the slice
        // this is the initial state of the slice, which is used to set the initial state
        
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData; // action.payload.userData will contain the user data returned from the Appwrite service
            // action.payload will contain the data passed to the login action
            // so we will set the userData to the userData returned from the Appwrite service
            // and we will set the status to true, which means the user is logged in
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

// reducer ke indivisual functions bhi export karne padenge kyuki alag alag components un function ko use karke state jaan leta hai ya fir dispatch kar deta hai unn method se  
export const {login, logout} = authSlice.actions;

// authslice m se reducer ko export karna padega
export default authSlice.reducer;