import React from 'react'

const Input = (props) => {
  return (
    <form  onSubmit={props.submitHandler}>
      <div className="container ">
        <label htmlFor="">Product ID:</label>
        <input type="number"  value={props.id} onChange={(e)=>props.setId(e.target.value)}/>
        <label htmlFor="">Selling Price:</label>
        <input type="number" value={props.price} onChange={(e)=>props.setPrice(e.target.value)}/>
        <label htmlFor="">Product Name:</label>
        <input type="text" value={props.name} onChange={(e)=>props.setName(e.target.value)} />
        <label >Choose a Caterory:</label>
        <select name="" id="" value={props.category} onChange={(e)=>props.setCategory(e.target.value)}>
          <option value="Select">Select Category</option>
          <option value="Electronic Item">Electronic Item</option>
          <option value="Food Item">Food Item</option>
          <option value="Skin Care">Skin Care</option>
        </select>
        <button type='submit'>Add Product</button>
      </div>
    </form>
    
  )
}

export default Input
