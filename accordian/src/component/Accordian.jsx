import React, { useState } from 'react'
import data from './Data'

export const Accordian = () => {
    const[value,setValue]=useState(null)
    const toggleHandler =(id)=>{
        setValue(value===id?null:id)
    }
  return (
    <div>
        <h1>Accordian Project</h1>
        {data.map(curElem=>(
            <div key={curElem.id}  >
                <div style={{display:'flex',paddingLeft:'10px'}}>
                <h3>{curElem.question}</h3>  <p style={{paddingLeft:'10px'}} onClick={()=>toggleHandler(curElem.id)}>{curElem.id ===value ?<button>-</button> : <button>+</button> }</p>
                </div>
                {curElem.id ===value ?<p>{curElem.answer}</p> :null}
            </div>
            
        ))}
    </div>
  )
}
