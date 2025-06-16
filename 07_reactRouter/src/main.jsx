import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)










// What Is Nested Routing?
// Nested routing allows you to create a parent-child relationship between routes.

// The parent route provides a common layout (like a navbar or sidebar).

// The child routes provide different content that appears inside that layout depending on the current path.

// 💡 Scenario: You Have a Common Layout
// Suppose your app has a layout like this:

// sql
// Copy
// Edit
// +------------------------------------+
// |   Navbar (same for all pages)      |
// +------------------------------------+
// |                                    |
// |         Page Content               |
// |         (changes with route)       |
// |                                    |
// +------------------------------------+
// |   Footer (same for all pages)      |
// +------------------------------------+
// You want:

// /about → Show the About page inside this layout

// /contact → Show the Contact page inside this layout

// / → Show the Home page inside this layout

// This is where nested routing with <Outlet /> helps.

// 🧱 Layout.jsx: The Common Shell
// Example: Layout.jsx

// import { Outlet } from 'react-router-dom'
// import Navbar from './components/Navbar'

// function Layout() {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//     </div>
//   )
// }

// export default Layout
// What happens here:
// <Navbar /> always shows — it is part of the layout.

// <Outlet /> is a placeholder. It will be replaced by the child route component.




// Router Setup
// jsx
// Copy
// Edit
// <Route path='/' element={<Layout />}>
//   <Route path='' element={<Home />} />
//   <Route path='about' element={<About />} />
//   <Route path='contact' element={<Contact />} />
// </Route>
// This says:

// For all routes under /, use <Layout /> as the main container.

// Show:

// <Home /> at /

// <About /> at /about

// <Contact /> at /contact

// But all these will render inside the <Outlet /> in Layout.jsx.





// Special: Dynamic Route /user/:userid

// <Route path='user/:userid' element={<User />} />
// This matches any URL like /user/123 or /user/abc and gives you the userid using useParams() inside User.jsx.

// 💡 Special: Loader Function (Pre-Fetching)

// <Route 
//   loader={githubInfoLoader}
//   path='github' 
//   element={<Github />}
// />
// This route fetches some data before rendering the Github component. It uses the githubInfoLoader function to load data from an API (e.g., GitHub user info).

// 🔃 5. Render the App

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
// This mounts the app to the root HTML element (<div id="root">)

// Wraps the app in RouterProvider to enable routing.

// 📦 Full Flow
// When a user visits a route:

// Router checks the path.

// Loads the Layout component (because all child routes are nested under /).

// Based on path:

// /about → renders <About /> in <Outlet />

// /user/99 → renders <User /> with userid = 99

// /github → runs githubInfoLoader and renders <Github /> with the loaded data.





// Summary Table

// createBrowserRouter	             Creates router for browser
// createRoutesFromElements   	     Lets you write routes using JSX
// <Layout />	                       Shared wrapper for all routes (contains <Outlet />)
// <Route path='user/:userid' />	   Dynamic route with user ID
// loader={githubInfoLoader}	       Pre-fetches data before rendering