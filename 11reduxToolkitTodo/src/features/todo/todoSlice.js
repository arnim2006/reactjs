// step 3
// A slice is like a small folder that keeps:
// Some part of your app's data
// The rules to change that data
// We use it to keep things organized and simple.

// Why is it Called a "Slice"?
// Because it's a slice (part) of the whole app's data — like a slice of pizza 🍕

// Each slice manages just one small part of the full app state.
import { createSlice, nanoid } from '@reduxjs/toolkit';   // nanoid is a method which generated unique id and createSlice is the main tool for creating a “slice” of your app's state.



// now the second thing is , we know that the first important thing for a store is its initial value , starting m vo kaisa dikhega so let is make a initial state
// it can be array or an object , we are making it as objects

// You are creating a variable called initialState, which contains:
// A todos array: This is a list of to-do items.
// Each to-do item is an object with:
// id: A unique number to identify this item (1 in this case)
// text: What the to-do says — "Hello world"
// So you're saying:
// 👉 "My app starts with one to-do item that has the text Hello world and an ID of 1."
const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}



// now let us make a slice 
// we have expported this becuase ye baad m kaam ayega 

export const todoSlice = createSlice({
    // slices ke naam soch samajke rakhne h kyuki jab ham redux tooolkit ka chorme extension use karnege toh vaha pe yehi names show honge 
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        // IF WE WANTED TO UPDATE THE TODO , WE CAN DO IT LIKE THIS:

        // updateTodo: (state, action) => {
        //     const { id, newText } = action.payload;
        //            // Find the todo that matches the id
        //     const todoToUpdate = state.todos.find((todo) => todo.id === id);
        //            // If found, update its text
        //     if (todoToUpdate) {
        //         todoToUpdate.text = newText;
        //     }
        // }
    }
})

// A reducer is a function that decides how the state should change when something happens (an action is sent).
// Reducers must be pure:
// No random values
// No API calls inside
// Just logic to update state


export const { addTodo, removeTodo } = todoSlice.actions    // 	Exposes the action creators

export default todoSlice.reducer        // Exposes the reducer to use in the Redux store
















// export const todoSlice = createSlice({

// 👆 This line starts the creation of a slice called todoSlice.
// This slice will handle everything related to to-do items (like adding and removing).
// We use export so that other files (like the store or components) can use this todoSlice.


// 🧠 This part:
// name: 'todo',

// You're giving this slice a name.
// That name is important because:
// It’s how Redux Toolkit tracks this slice.
// It's shown in Redux DevTools (the Chrome extension) for debugging.
// The name will also become the key in your Redux store like state.todo.



// 📦 This part:
// initialState,
// 🗂️ You’re giving the slice some starting data, which was defined earlier as:

// const initialState = {
//     todos: [{ id: 1, text: "Hello world" }]
// };
// This means:
// The state will start with one default to-do item.
// Later, this list will grow or shrink using the reducer functions below.





// addTodo: (state, action) => {
//   const todo = {
//     id: nanoid(),
//     text: action.payload
//   }
//   state.todos.push(todo)
// }
// 🧠 What is this?
// This is one reducer function inside a Redux Toolkit slice.
// Its job is to handle the logic for adding a new todo to your app's state.

// 🔍 Line-by-line Explanation:
// ✅ addTodo: (state, action) => {
// This is a function named addTodo.

// It always takes two inputs:
// state: The current state (in this case, something like { todos: [...] })
// action: The data being sent when the user clicks a button or takes some action — like entering a new to-do item.

// 💡 Redux Toolkit uses a library called Immer that allows you to "mutate" state directly (like push) without breaking rules. Under the hood, it still keeps it immutable!

// 🧱 const todo = { ... }

// const todo = {
//   id: nanoid(),
//   text: action.payload
// }

// Here you are creating a new to-do object.

// 🔸 id: nanoid()
// nanoid() creates a random unique string, like "a9f31g8u"
// This ID is used so each todo is uniquely identified (especially useful when deleting them later)

// 🔸 text: action.payload
// action.payload is the value passed when the addTodo action is dispatched.
// 
// For example, if you do:
// dispatch(addTodo("Buy milk"))
// Then action.payload will be "Buy milk", and this becomes the text.


// So the full todo object now looks like:

// {
//   id: "x9dj2", 
//   text: "Buy milk"
// }
// 🧩 state.todos.push(todo)
// You're saying:
// "Take this new todo object and add it to the end of the existing todos list."

// Remember:
// state.todos is your array of all todo items.
// push() adds the new item at the end.

// So if you started with:

// state.todos = [
//   { id: 1, text: "Hello world" }
// ]
// After adding a new one:


// state.todos = [
//   { id: 1, text: "Hello world" },
//   { id: "a8f3", text: "Buy milk" }
// ]

// 🧪 Full Example in Action
// If your component calls:

// dispatch(addTodo("Go for a walk"))
// Here's what happens:

// Redux passes "Go for a walk" as action.payload

// The addTodo reducer creates a new todo object:

// { id: "random123", text: "Go for a walk" }
// This object gets added to the end of state.todos





// ❌ 2. Remove a Todo

// removeTodo: (state, action) => {
//     state.todos = state.todos.filter((todo) => todo.id !== action.payload )
// }
// 🔨 This function runs when you dispatch removeTodo.

// action.payload is expected to be the ID of the to-do you want to remove

// filter() goes through the list and keeps only the todos whose ID is not equal to the one you passed.

// ➡️ Example in a component:
// dispatch(removeTodo('abc123'))