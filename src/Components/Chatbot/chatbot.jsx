import React from 'react'
import logo from '../../assets/icons/chatbot.jpg'
import { Link } from 'react-router-dom'

function chatbot() {
    return (
        < Link to='/chatpage' className='fixed bottom-5 right-5' >
            <img src={logo} alt="Chatbot" className='rounded-full h-14 cursor-pointer shadow-lg animate-pulse' />
        </Link >
    )
}

export default chatbot