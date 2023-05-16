import React from 'react'
import './Greet.css';

function Hello() {
   const greeting = "Hello";
    const intro = "My name is Me";
    const link = "https://www.igihe.rw";
     return (

  
        <div className='main'>
    <div className='greet'>
    <div>{greeting}  </div>
    <div>{intro}</div>
    <a href={link}>Click</a>
    </div>
    
    </div>
  )
}

export default Hello
