import React from 'react'

const SkinCare = (props) => {
  return (
    <ul>
        {
      props.i.category==="Skin Care"  &&<div> 
        <li> {props.i.price}-{props.i.category}-{props.i.name}</li>
        <button >Delete Product</button>
      </div>}
    </ul>
  )
}

export default SkinCare