import React from 'react'

const Food = (props) => {
  return (
    <ul>
        {props.i.category==="Food Item" &&<div>
        <li> {props.i.price}-{props.i.category}-{props.i.name}</li>
        <button >Delete Product</button>
      </div>}
    </ul>
    
  )
}

export default Food