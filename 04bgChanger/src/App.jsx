import { useState } from "react"

function App() {
  let [color,setColor] = useState("yellow")

  return (
  
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flexwrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
            onClick={() => setColor("red")}        // we can write it as onClick = {setColor} , but onlick  expects a function inside it so we can pass the function , but we dont want to pass the function() like this because it will execute also , but we dont want the executed value , we just want the function , so that can be done by arrow function   // The onclick method in React expects a function reference You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}} >Red</button>

            <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}} >Green</button>

            <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}} >Blue</button>
             
             
          </div>
        </div>
      </div>
    
  )
}

export default App







// return (
//   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
//     ...
//   </div>
// )
// This is the main container of your app. Let’s break it:

// 🔹 className="w-full h-screen duration-200"
// Using Tailwind CSS classes:
// w-full: Full width
// h-screen: Full height of the screen
// duration-200: 200ms transition animation when style (like color) changes

// 🔹 style={{ backgroundColor: color }}
// You are dynamically setting the backgroundColor using the color state.

// When color is "red", this becomes:
// style={{ backgroundColor: "red" }}
// So, the background changes with button clicks




//Fixed Button Panel :
{/* <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
fixed: Positions it stuck to the screen
bottom-12: Puts it 12 units above the bottom
inset-x-0: Stretch left-to-right (X-axis)
flex, justify-center: Center the buttons
px-2: Horizontal padding
This is the panel that contains the buttons */}

// In Tailwind CSS:
// inset-x-0
// is a shorthand utility for:
// left: 0;
// right: 0;
// It sets both the left and right CSS properties to 0, meaning the element will stretch across the full width of its parent (or the viewport, if it's position: fixed or absolute).






// Buttons Wrapper :
{/* <div className="flex flexwrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
flex, justify-center: Align buttons horizontally

gap-3: Adds spacing between buttons

shadow-lg: Adds shadow to make it float

bg-white: White background

px-3 py-2: Padding inside the box

rounded-xl: Large border-radius for a soft card look */}







// Buttons — Red, Green, Blue  :
// Example Button (Red):

// <button
//   onClick={() => setColor("red")}
//   className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//   style={{ backgroundColor: "red" }}
// >
//   Red
// </button>
// What Happens Here:
// onClick={() => setColor("red")}:

// This is an arrow function

// When clicked, it calls setColor("red"), which updates the background color

// ⚠️ Why arrow function?
// React expects a function reference in onClick, not the result of a function.

// Wrong:
// onClick={setColor("red")} // ❌ This runs immediately during render!

// Right:
// onClick={() => setColor("red")} // ✅ Runs only when clicked

// Styling:
// text-white: Text is white for contrast
// shadow-lg: Button shadow
// rounded-full: Fully rounded
// style={{ backgroundColor: "red" }}: Button looks red visually

// Same applies for the Green and Blue buttons — each button sets a different color













// Summary of Differences:

// Feature	        Fixed Button Panel	                      Buttons Wrapper
// Purpose :	   Positions the entire button area	     Styles and holds the individual buttons
// CSS Role	:   Layout & placement(positioning)	     Appearance & alignment(design)
// Fixed ?   :   Yes(fixed + bottom - 12)	             No(just part of fixed container)
// Background:	 Transparent	                            White(bg - white)
// Contains :	  The button wrapper	                    The actual buttons
// Use Case	:   Floating button bar	                  Button "card" design