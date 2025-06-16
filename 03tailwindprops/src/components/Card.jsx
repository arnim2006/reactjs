import React from 'react'
// btnText= "visit me" is default value
// if we don't pass btnText prop, it will take "visit me" as default value
function Card({username, btnText="visit me"}) {
    console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText } →
    </button>
  </div>
</div>
  )
}

export default Card



// What are props in React?
// In React, props (short for "properties") are how you pass data from a parent component to a child component.

// You can think of props like function arguments, but for React components.

// Example:
// <Card username="Arnim" btnText="Follow Me" />
// Here you're passing two props:

// username = "Arnim"

// btnText = "Follow Me"

// These are passed into your Card component.

// Inside the component:
// function Card({ username, btnText = "visit me" }) { ... }
// This is saying:

// I expect two props: username and btnText

// If btnText is not provided, I will default it to "visit me"

// 🔹 What is Destructuring?
// Destructuring is a feature in JavaScript that lets you unpack values from objects or arrays and assign them to variables.

// Example without destructuring:
// function Card(props) {
//   const username = props.username;
//   const btnText = props.btnText || "visit me";
// }
// This is longer and more repetitive.

// The same with destructuring:
// function Card({ username, btnText = "visit me" }) { ... }
// This is cleaner. It:

// Extracts username and btnText from props

// Gives a default value to btnText if its missing











{/* <div className="relative h-[400px] w-[300px] rounded-md">
A <div> used as a card container

relative → Enables absolutely positioned children

h-[400px] and w-[300px] → Fixed height and width

rounded-md → Medium-rounded corners (Tailwind CSS) */}






{/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
Adds a dark gradient overlay over the image

absolute inset-0 → Covers the whole parent container

bg-gradient-to-t from-gray-900 to-transparent → Dark at the bottom, fades to transparent at top */}








// CONTENT AREA (username, description, button):

// <div className="absolute bottom-4 left-4 text-left">
// Positions this block near the bottom-left of the card.

// Inside it:
// <h1 className="text-lg font-semibold text-white">{username}</h1>
// Displays the username passed via props

// White text, large, bold


// <p className="mt-2 text-sm text-gray-300">
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
// </p>
// Placeholder description text below the name

// Small, slightly gray text



// <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
//   {btnText} →
// </button>
// A button showing the btnText prop (default: “visit me”)

// → arrow gives it a nice touch

// Styled as white, clickable text

