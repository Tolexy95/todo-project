import React from 'react'
import { useState } from 'react'


const CustomContainer = (props) => {
    const {id,question, answer, showIndex, checked, index} =props
    
      
   
  return (
    <div>
         <p>{id}</p>
        <h1 className='questContain' onClick={() => showIndex(index)}>{question}</h1>
       {
        checked &&  <p>{answer}</p>
       }
        </div>
  )
}

export default CustomContainer