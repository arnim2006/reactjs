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






/*

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
  in every main.jsx file we have this code, this is the entry point of our react application, it is responsible for rendering the root component of our application, which is usually the App component.
  let us talk about createroot :
// createRoot is a method from the react-dom package that creates a root for rendering a React application.
// behind hthe scene , it creates a dom like structure just like browser , it compares the main dom and its own dom and update the only things that are updated in UI , but browser poora dom remove karta hia aur poore dom ko vapas reload karta hai that is called page reload , but in virtual dom we can tryack the dom in tree like structure and change the only vakues that are chaning in UI 
//  basically javascript apna ek virtual dom tree banata hai usme cheezo ko trac kkarta hai aur change karta hai jab need hoti hai
lekin suppose some elements are network depended and hamne kaha ki ye DOM hai isme ek button h jisse ye text update hoga , aur ham jaise hee ye kaam karne jaa rahe the utne m he ek new update aagaya , fir usko karne gaye toh dobara agaaya , lekin vahi pe mai agar ek do seocnd ruk jaata toh mai directly intermediate waale call ko update kardeta regardless maine abhi wale ko kia h ya nahi 
so react also thinked this and they thought that har UI ko instantaneously update karne ki zarurat nahi hai , agar koi cheez network se aa rahi hai toh usko thoda rukne do , jab wo aa jaaye tab update kar dena , toh react ne isko implement kia aur isliye react ka naam react hai kyuki ye react karta hai kisi bhi change par , aur ye change kisi bhi cheez par ho sakta hai , jaise ki user input, network request, etc.

virtual dom ko update karne ke liye algorithm use hota hai thats called fiber algorithm, jo ki react ka core hai, ye algorithm virtual dom ko update karta hai aur fir usko browser ke real dom se compare karta hai aur sirf un elements ko update karta hai jo change hue hain, isliye react applications fast hote hain aur performance achi hoti hai.
the goal of react fiber is to increase its suitablity for complex applications with many components and to improve the user experience by making updates more efficient and responsive.
other key features of react fiber is the ability to pause , abort , or reuse work as new updates in; the ability to assign priority to different types of updates ; and new concurrent primitives that allow developers to control how updates are scheduled and executed.



*/

// hydration : Jab pehli baar page load hota hai, buttons aur images dikhte hain (HTML aa gaya), lekin kuch click nahi hota kyunki JavaScript ab tak load nahi hui hoti. Phir jab JavaScript load ho ke React ko HTML ke saath connect karti hai aur sab interactive ho jata hai, us process ko hydration bolte hain. aur ye fibre algorithm k through kaafi aachi hoti hai

/* 
1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately. */

// 10. React Fiber is the reconciliation algorithm used by React to update the UI efficiently.
// what is reconciliation?
// Reconciliation is the process of updating the UI in response to changes in the state or props of a component. It involves comparing the current state of the UI with the new state and determining what changes need to be made to update the UI.
// The differentiation algorithm compare two trees, one is the main DOM tree of the browser and the second one is the react tree created by the createRoot.

// diffing of lists is performed using keys . keys should be "unique" and "stable" across renders.
// diffing means comparing two trees and finding the differences between them. React uses a heuristic algorithm to compare the two trees and find the differences. The algorithm is based on the assumption that the two trees are similar, and it tries to minimize the number of changes required to update the UI.


// different tyeos of updates have different priorities - an animation update needs to complete more quickly than , say, an update from a data store.

// A push bases approach requires the app (ypu, the programmer) to decide when to update the UI, whereas a pull based approach allows the app to decide when to update the UI based on the current state of the application.

// React Fiber is the reconciliation algorithm used by React to update the UI efficiently. It is designed to be more flexible and efficient than the previous reconciliation algorithm used by React, which was based on a stack-based approach. Fiber allows React to break down complex updates into smaller units of work, which can be scheduled and prioritized based on their importance to the user experience.
// Fiber also allows React to pause and resume work, which can help improve the performance of complex applications with many components. This is done by breaking down the work into smaller units and allowing React to pause and resume work as needed, based on the current state of the application and the user's interactions with it.
// Fiber also allows React to prioritize updates based on their importance to the user experience, which can help improve the performance of complex applications with many components. This is done by assigning a priority to each update and allowing React to schedule updates based on their priority.
// Fiber also allows React to handle complex updates more efficiently, such as updates that involve multiple components or updates that require a lot of computation. This is done by breaking down the work into smaller units and allowing React to schedule updates based on their priority and importance to the user experience.
// In summary, React Fiber is a powerful and flexible reconciliation algorithm that allows React to update the UI efficiently and effectively, while also providing a better user experience by allowing React to prioritize updates based on their importance to the user. It is designed to be more flexible and efficient than the previous reconciliation algorithm used by React, which was based on a stack-based approach.

