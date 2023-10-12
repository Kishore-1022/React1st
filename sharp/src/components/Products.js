import React from 'react'

const Products = (props) => {
  return (
    <ul>
      
      {props.i.category==="Electronic Item"  &&<div> 
        <li> {props.i.price}-{props.i.category}-{props.i.name}</li>
        <button >Delete Product</button>
      </div>}
     
      
      
      
      
    </ul>
    
  )
}

export default Products