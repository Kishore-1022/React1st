import {  useEffect, useState } from "react";
import Input from "./components/Input";
import Products from "./components/Products";
import Food from "./Food";
import SkinCare from "./components/SkinCare";


function App() {
  const [id,setId]=useState('');
  const [price,setPrice]=useState('');
  const [name,setName]=useState('');
  const [category,setCategory]=useState('');
  const [post,setPost]=useState([]);
   
  useEffect(()=>{
    const a=JSON.parse(localStorage.getItem('post'))
    localStorage.setItem('post',JSON.stringify(post))
  
  },[post])

  function submitHandler(e){
    e.preventDefault()
    const details={
      id:id,
      price:price,
      name:name,
      category:category
    }
    post.unshift(details)
    setPost(post)
    localStorage.setItem('post',JSON.stringify(post))
    setId('')
    setPrice('')
    setName('')
    setCategory('')
    console.log(post)
  }
  return (
    <>
      <Input 
      id={id}
      setId={setId}
      price={price}
      setPrice={setPrice}
      name={name}
      setName={setName}
      category={category}
      setCategory={setCategory}
      post={post}
      setPost={setPost}
      submitHandler={submitHandler}
      />
      <h1>Products</h1>
      

      <h3>Electronic items</h3>
      {post.map(i=><Products i={i} />)}

      <h3>Food Item</h3>
      {post.map(i=><Food i={i} />)}

      <h3>Skin Care</h3>
      {post.map(i=><SkinCare i={i} />)}

    </>
    
    
  );
}

export default App;
