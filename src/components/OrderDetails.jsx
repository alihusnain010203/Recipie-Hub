import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import item from './item';
const OrderDetails = () => {
    const {id} =useParams();
    const selectdish=item.find(i=>i.id===Number(id));
    if (!selectdish) {
        return <><p>NOT FOUND</p> 
         <Link to="/Meals">
            <button className="button">⬅</button>
          </Link></>
    }
  return (
    <div className='Order-page' style={{height:"70vh" ,backgroundColor:"blue" ,color:"white" ,display:"flex" ,justifyContent:"space-around", alignItems:"center" ,flexDirection:"column"}}>
        <div className='Order-card card-meal'  style={{color:"blue" ,height:"30vh"}}>
            <h1>{selectdish.name}</h1>
            <h2>{selectdish.Logo}</h2>
            <h3>{selectdish.Price}</h3>
            <h4>ingredients</h4>
         <p>Lorem ipsum dolor sit amet.</p>
            <button className='btn' onClick={(e)=>{
                e.currentTarget.textContent="✅Complete"
            }}>Order Now</button>
        </div>

        <Link to="/Meals">
            <button className="button">Back⬅</button>
          </Link>
    </div>
  )
}

export default OrderDetails