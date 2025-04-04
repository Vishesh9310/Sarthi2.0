import React from 'react'
import Nav from '../navbar'
import Footer from '../footer'

function showmore_item() {
    const list_name = ['apple', 'banana', 'orange'];

  return (
    <div>
        <Nav/>
        <section className='col-md-6'>
            {list_name.map((item)=> <p>{item}</p> )}
        </section>
        <Footer/>
    </div>
  )
}

export default showmore_item