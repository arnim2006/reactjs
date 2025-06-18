// step 5
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'          
// This gives you access to dispatch, which is used to send actions to the Redux store.
// Redux needs to know:
// "Hey, the user typed something! Now update the global state."
// And dispatch() is how you shout that out.
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() { 
//  You are using React's useState to keep track of the text input from the user.
// input = current value in the text box
// setInput = function to update that value when user types
    const [input, setInput] = useState('')    
    const dispatch = useDispatch()


//     What happens when user clicks "Add":
// Stops page reload using e.preventDefault()

// Dispatches the action:
// dispatch(addTodo("Buy milk"))
// → This goes to your Redux slice and adds a new todo with a random ID.
// Clears the input box by setting it to an empty string.
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))    // dispatch jo hai vo reducer ka use karte hue store ke andar values chnage karta hai 
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo