import React  from 'react'
import './App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Gallery from './Pages/Gallery.jsx'
import News from './Pages/News.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import Tracker from './Pages/Tracker.jsx'
import Consultant from './Pages/Consultant.jsx'
import Ecom from './Pages/Ecom.jsx'
import Experience  from './Pages/Experience.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Showmore from './Components/Ecom/showmore_item.jsx'
import AtoCart from './Components/Ecom/addtocart.jsx'
import Buy from './Components/Ecom/buy.jsx'
import Details from './Components/Ecom/details.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Services /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/news", element: <News /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/fitness", element: <Tracker/>},
      { path: "/consultant", element: <Consultant/>},
      { path: "/ecom", element: <Ecom/>},
      { path: "/experience", element: <Experience/>},
      { path: "/signup", element: <Signup/>},
      { path: "/login", element: <Login/>},
      { path: "/profile", element: <Home/>},
      { path: "/showmore", element: <Showmore/>},
      { path: "/addtocart", element: <AtoCart/>},
      { path: "/buy", element: <Buy/>},
      { path: "/details", element: <Details/>},
    ]
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App