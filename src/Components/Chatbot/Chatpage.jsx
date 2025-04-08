import React, { useState } from 'react'
import Nav from '../navbar'
import Footer from '../footer'

function Chatpage() {

  const [messages, setMessages] = useState([
    { text: "Hello! I am Sarthi. How can I Help You", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse = { text: `You said: "${input}"`, sender: "bot" };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  
  return (
    <>
    <Nav/>

    <div className='border-y-2 border-white w-full h-fit p-20'>
      <section className='bg-teal-500 items-center rounded-lg w-2/3 mx-auto'>
        <div className='w-full p-4 bg-white overflow-y-auto max-h-2/3 rounded-lg space-y-2'>
          {messages.map((msg, index) => (
            <div key={index} className={`p-3 rouned-lg ${msg.sender === "user" ? "bg-teal-500 text-white ml-auto rounded-lg" : "bg-teal-100 text-black rounded-lg"}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className='p-2 w-full inline-flex gap-5 mt-5'>
          <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Type Your message...' className='button_border p-2 rounded-lg w-full' />
          <button onClick={handleSend} className='px-4 py-2 button rounded-lg'>Send</button>
        </div>
      </section>
    </div>

    <Footer/>
    </>
  )
}

export default Chatpage