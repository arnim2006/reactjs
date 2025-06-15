// we can use built in hooks to create a custom hook
import { useEffect,useState } from "react";
// useEffect is a React Hook that lets you run code when your component:

// Mounts (is added to the page)

// Updates (when props or state change)

// Unmounts (is removed from the page)

// It's often used to perform side effects, like:

// Fetching data

// Setting up event listeners

// Updating the DOM

// Starting or stopping timers

// Subscribing/unsubscribing to services


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)    // api calls are in json format but the value returned by an api call is in the form of string , so we have to convert it back to json form
        .then((res) => res.json())     // response converted to json form 
        .then((res) => setData(res[currency])) // now this json form needs to be holded somewhere , so if we store this in a regular variable then we may face a problem that is , it will be updated to UI , so we will use useState hook 
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;

// useEffect hook m hamne dependency array m currency isiliye hee daala hai kyuki jab bhi ham currency  change karenge jab vo uss hisaabs se hamko data dega json form m and we have tested that 

// in the code line : .then((res) => setData(res[currency]))  , we have used res[currency], as we tested in API that currency ki jagah ham usd daalenge toh vo usd ka saara bata dega , aise hee jo bhi currency daalenge vo uska bata dega data . toh isilie hamne setData function m currency ki value ko excess kia , basically we are writing setData.res.usd if currency ki jagah usd hai toh ..
// useStatae : It allows your component to "remember things" over time — like a user's input, a counter value, a loading flag, etc.

