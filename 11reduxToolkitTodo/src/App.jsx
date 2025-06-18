import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>

      <AddTodo />
      <Todos />
    </>
  )
}

export default App

// importance of uses of two libraries:
// When redux was introduced, it took a little more time to setup than context api and there was a problem in debugging too.Then developers introduced redux - toolkit in which setup and debugging became easy through some redux functions, so to use redux it is necessary to install both these libraries.















// What is Redux?
// Redux is a tool to manage data (state) in your React app.

// Think of Redux as a big box that stores all the important data your app needs — like user info, cart items, theme, etc.

// Instead of each component managing its own data, Redux puts it all in one place so any component can use it.

// 🧱 Imagine This:
// You’re building an online store:

// The user adds items to the cart

// The cart should update in the header

// The checkout page also needs to know what’s in the cart

// If each component manages its own cart, things get messy 😵

// Redux solves this by keeping the cart (and other data) in one central place, so all parts of your app can access and update it easily.

// 🔄 How Redux Works (in 3 steps):
// Store:
// A big object that holds all your app’s data.

// Action:
// You tell Redux what you want to do (e.g., "add to cart").

// Reducer:
// Redux uses this to update the data in the store based on the action.

// 🧃 Simple Example:
// Imagine your store has a number:

// let state = 0;
// You click a button → That sends an action:


// { type: 'INCREMENT' }
// Then a reducer says:


// if (action.type === 'INCREMENT') {
//   state = state + 1;
// }
// Now the state becomes 1 → Your UI updates automatically!

// 🧩 So Why Use Redux?
// ✅ Keeps data in one place

// ✅ Easier to manage in big apps

// ✅ Makes debugging easier

// ✅ Many components can share the same data




// redux — The Brain
// redux gives you:

// A store (to hold state)

// actions (to describe changes)

// reducers (to update state)

// But... redux doesn't know anything about React. It’s just plain JavaScript.

// 🔌 react-redux — The Connector
// react-redux is a library that connects Redux to your React components.

// It gives you special tools:

// Provider — wraps your app and gives every component access to the Redux store

// useSelector() — lets a component read data from the store

// useDispatch() — lets a component send actions to update the store


// SUMMARY
// redux handles the data logic

// react-redux connects that logic to your React app



// HISTORY:

// The Problem Before Flux
// In early React days (2013-2014), apps were becoming interactive and complex.

// Issue:
// Data (state) was managed locally inside components using this.state.

// Passing data between deeply nested components became messy and hard to track.

// Updating shared state from different parts of the app led to bugs and confusion.

// 🔁 2. Flux — Facebook’s First Solution
// Flux was introduced by Facebook.

// 📦 What is Flux?
// Flux is an architecture pattern (not a library) that introduced unidirectional data flow:

// sql
// Copy code
// View → Action → Dispatcher → Store → View (repeat)
// How It Worked:
// View (React component) sends an Action (e.g., "add to cart")

// The Dispatcher sends the action to Stores

// Stores hold the actual state and update it

// The View re-renders with the new state

// 🧠 Key Idea:
// Data flows in one direction, making things easier to predict and debug.

// ❌ But... Problems:
// It was boilerplate-heavy

// The dispatcher was confusing and hard to manage

// Everyone made their own version of Flux differently

// Too complex for small or mid-sized apps

// ⚙️ 3. Redux — A Simpler, Predictable Way
// In 2015, Dan Abramov created Redux, inspired by Flux + Functional Programming + Elm.

// ✨ What Redux Did Better:
// No dispatcher – just plain JavaScript

// Single store instead of multiple stores

// Pure reducers to update state

// Works great with React or other libraries

// Core Concepts:
// Store — the central place to keep your app's state

// Action — an object that says “something happened”

// Reducer — a pure function that changes the state based on the action

// ✅ Pros:
// Predictable state updates

// Easy to test

// Time-travel debugging

// ❌ Cons:
// Lots of boilerplate (actions, types, reducers, constants)

// Steep learning curve

// Writing code felt repetitive

// 🚀 4. Redux Toolkit (RTK) — The Modern Redux
// Introduced by the Redux team as the official, recommended way to use Redux.

// 🤔 Why Redux Toolkit?
// Redux was powerful but:

// Verbose (lots of setup)

// Easy to misuse

// Scary to newcomers

// 💡 Goals of Redux Toolkit:
// Make Redux easier to use

// Remove boilerplate

// Follow best practices by default

// 🌟 Key Features of Redux Toolkit
// Feature	What It Does
// configureStore()       	 Creates store with good defaults (DevTools, middleware)
// createSlice()	           Combines action creators + reducers in one place
// createAsyncThunk()	       Handles async logic (like API calls) easily

// Built-in Immer	Lets you write "mutating" code that stays immutable under the hood
// DevTools support	Redux DevTools work automatically
// Best practices	Preconfigured for performance and safety





















// Store — “The Brain of Your App”
// What it is:
// The store is a big object that holds all the important data (state) of your app in one place.

// Think of it like:

// 🧳 A suitcase that carries everything your app needs: user info, cart items, settings, etc.

// const store = configureStore({
//   reducer: myReducer
// });
// You only have one store in your entire app.

// Every component can access it if needed.

// It's read-only — you can't directly change it.

// 🧩 2. Reducer — “The State Changer”
// What it is:
// A reducer is a function that decides how the state should change when something happens (an action is sent).

// 🧪 Think of it like a scientist in a lab:

// It takes the current state and an action

// It does some logic

// It returns a new updated state

// function counter(state = 0, action) {
//   if (action.type === 'INCREMENT') {
//     return state + 1;
//   }
//   return state;
// }
// ✅ Reducers must be pure:

// No random values

// No API calls inside

// Just logic to update state

// In Redux Toolkit, we use createSlice() to define reducers more easily:


// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: 0,
//   reducers: {
//     increment: (state) => state + 1,
//   }
// });
// 📤 3. useDispatch — “The Action Sender”
// What it is:
// useDispatch() is a React hook that gives you a function to send actions to the store.

// 📫 Think of it like a mailbox where you drop in an action like:


// dispatch({ type: 'INCREMENT' });
// In Redux Toolkit:


// dispatch(counterSlice.actions.increment());
// You're saying:
// “Hey store! Please change the state using this action!”

// 📥 4. useSelector — “The Data Reader”
// What it is:
// useSelector() is a React hook that lets you read data from the store.

// 📚 Think of it like a book reader:
// You open the store and grab the piece of data you want.

// Example:


// const count = useSelector((state) => state.counter);
// Now count has the latest value from the store, and your component will automatically re-render when it changes.






// PUTTING IT ALTOGETHER :

// Component → dispatch(action) 
//            ↓
//         Reducer (handles it)
//            ↓
//      Store gets updated
//            ↓
//    useSelector reads the new data
//            ↓
//    Component updates automatically
