// STEP 1:  process to make store
// step 1 : to configure store 
import {configureStore} from '@reduxjs/toolkit';  // it has came from core redux , not react-redux

// STEP 4
import todoReducer from '../features/todo/todoSlice';




// step 2
export const store = configureStore({
    // step 4
    reducer: todoReducer
})