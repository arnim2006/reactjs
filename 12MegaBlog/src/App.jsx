// toh hamari app ka major role yaha se hoga basically hame dekhna padega ki jaise hee app lead ho raha hai toh user logged in hai ya nahi hai , aur ye ham state se check kar lenge 
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  //console.log(import.meta.env.VITE_APPWRITE_URL);

  // ek ham state banayenge jo ki hogi loading  , basically jab ham application se data fetch karenge toh hame pata hai ki appwrite koi local system m toh rakha nahi hai ki immideiate saara kaam hojayega , netwrk req m time lag jaeyega , toh uske jab bhi aisi koi cheez ho ki hamko database  se kuch poochna ho ya fir netowork se kuch poochna ho toh  ek loading state bana lena accha hota hai jisse ham conditional rendering use kar r=sakte hai with the help of if else condition (means ki alag loading true hai toh loading ka icon dikhayenge aur agar true nahi hai toh data dikhayenege )
  const [loading, setLoading] = useState(true)   // usually starting m ham loading ko true karenge kyuki ??
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? ( // agar loading false hai toh hi ham app ko render karenge
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
