import React from 'react'


import '../navbar/Navbar.css';

function Navbar() {
  return (
    <div>
       <nav>
        <div className='container'>
          
        <h1>Quimica</h1>
        
       <div className='menu'>
        <a href='#' className='is-active'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Blogs</a>
        <a href='#'>Team Section</a>
        <a href='#'>Events & Workshop</a>
       </div>

       <button className='hamburger'>
        <span></span>
        <span></span>
        <span></span>
       </button>
       </div>
       </nav>
    </div>
  )
}

export default Navbar