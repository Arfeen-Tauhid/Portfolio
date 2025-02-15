import React from 'react'
import styles from "./App.module.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Experience from "./components/Education/Education.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Codolio from "./components/Codolio/Codolio.jsx"
import Resume from "./components/Resume/Resume.jsx"
import Blog from "./components/Blog/Blog.jsx"

import { createBrowserRouter,RouterProvider } from "react-router-dom"
const App = () => {
  const router = createBrowserRouter([
  {
    path:"/",
    element:<> <Navbar /> <Hero /><About/><Experience/><Projects/><Codolio/><Contact/></>
  },
  {
    path:"/about",
    element:<><Navbar /><About/> </>
  },
  {
    path:"/Experience",
    element:<><Navbar /><Experience/> </>
  },
  {
    path:"/projects",
    element:<><Navbar /><Projects/> </>
  },
  {
    path:"/codolio",
    element:<><Navbar /><Codolio/> </>
  },
  {
    path:"/contact",
    element:<><Navbar /><Contact/> </>
  },
  {
    path:"/resume",
    element:<><Navbar/><Resume/> </>
  },
  {
    path:"/blog",
    element:<><Navbar /><Blog/> </>
  }
])
  return (
    <div className={styles.App}>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App