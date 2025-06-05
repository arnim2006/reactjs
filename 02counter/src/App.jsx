import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 // this commented method is not used if we want to update values in UI , its the responsiblity of react to upadate the UI , this method will update the conter value if we see it in console 
  // let counter = 15
  // const addValue = () => {
  //   console.log("clicked",counter);
  //   counter += 1
  // }
 



  // useState is a react hook that allows us to add state to functional components
  // useState returns an array with two elements: the current state value and a function to update that value
  // The first element is the current state value, and the second element is a function that can be used to update the state value
 const [count, setCounter] = useState(15) 

// This is the correct way to update the state value in a functional component
// The setCounter function is used to update the state value, and it will trigger a re-render of the component with the new state value
// The useState hook is used to create a state variable called count, and the initial value is set to 15

 const addValue = () => {
    
   //  count += 1

  setCounter(count + 1)
  
    
 }


  // The addValue function is called when the button is clicked, and it updates the state value by calling setCounter with the new value
  // The removeValue function is called when the button is clicked, and it updates the state value by calling setCounter with the new value
 const removeValue = () => {
    setCounter(count - 1)
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>

      <button
      onClick={addValue}
      >Add value {count}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App




// now this an assignment code where the value count must be from 0 to 20
/*
let [value, setValue] = useState(0)
 const addValue = () => {
  if (value == 20){
    setValue(value = 20)
  }
  else{
    setValue(value+1)
  }
    
  }
  
  const removeValue = () => {
    if (value > 0){
      setValue(value - 1)
    }
    else{
      setValue(value = 0)
    }
   
  }


*/