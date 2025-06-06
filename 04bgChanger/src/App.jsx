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
