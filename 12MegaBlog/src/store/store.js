// step 1 for store
// store banega kaise ?
// 1.store banane ke liye humein configureStore function ko import karna padega
// 2. store ko chaiye ki mujhe saare reducer ke baare m batao


import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
        // for example, if you have a posts slice, you can add it like this:
        // posts: postsSlice,
        // and so on for other slices   
        // for example, if you have a comments slice, you can add it like this:
        // comments: commentsSlice,
        // and so on for other slices
        // but for now, we are only adding authSlice
        // so that we can use it in our app
        // and later we will add more slices as needed
    }
});


export default store;