import React, { useState }  from 'react'
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
import Buy from './Components/Ecom/buy.jsx'
import Details from './Components/Ecom/details.jsx'
import ChatPage from './Components/Chatbot/Chatpage.jsx'
import ShippingForm from './Components/Ecom/ShippingForm.jsx'
import AdminForm from './Components/Admin/form.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  const [isloggedin, setIsloggedin] = useState(true);

  const basicinfo = {
    brand: "Sarthi",
    logged: isloggedin,
    location : "Noida",
    address : "E2, Block e, sector-26",
    state : "Uttar-Pradesh",
    pincode : 201301,
    tel : 645323,
    email : "sarthi@gmail.com",
    emer_call : 34532345432,
  }

  const router = createBrowserRouter(
    [
      { path: "/", element: <Home info = {basicinfo} /> },
      { path: "/about", element: <About info = {basicinfo} /> },
      { path: "/service", element: <Services info = {basicinfo} /> },
      { path: "/gallery", element: <Gallery info = {basicinfo} /> },
      { path: "/news", element: <News info = {basicinfo} /> },
      { path: "/contactus", element: <ContactUs info = {basicinfo} /> },
      { path: "/fitness", element: <Tracker/>},
      { path: "/consultant", element: <Consultant/>},
      { path: "/ecom", element: <Ecom info = {basicinfo} />},
      { path: "/experience", element: <Experience info = {basicinfo} />},
      { path: "/signup", element: <Signup info = {basicinfo} />},
      { path: "/login", element: <Login info = {basicinfo} />},
      { path: "/profile", element: <Home info = {basicinfo} />},
      { path: "/showmore", element: <Showmore info = {basicinfo} />},
      { path: "/buy", element: <Buy info = {basicinfo} />},
      { path: "/details", element: <Details info = {basicinfo} />},
      { path: "/chatpage", element: <ChatPage/>},
      { path: "/shippingform", element: <ShippingForm info = {basicinfo}/>},
      { path: "/formadmin", element: <AdminForm/>}
    ]
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App