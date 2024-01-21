import React, { useState } from 'react'
import './product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import Usefetch from './Usefetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from './Cartreducer';
function Product() {
    const id=useParams().id
    const[selectedimg,setselectedimg]=useState('ima')
    const[quantity,setquantity]=useState(1)
    const {data,loading,error}=Usefetch(`/products/${id}?populate=*`)
    const dispatch=useDispatch()
  return (
    <div className='product'>
    {loading?"loading":(<>
      <div className='left'>
        <div className='images'>
            <img src={ 'http://localhost:1337'+ data?.attributes?.ima?.data?.attributes?.url} alt='' onClick={(e)=>setselectedimg('ima')} ></img>
            <img src={'http://localhost:1337'+data?.attributes?.img2?.data?.attributes?.url} alt='' onClick={(e)=>setselectedimg('img2')} ></img>
            <img src={'http://localhost:1337'+data?.attributes?.img3?.data?.attributes?.url} alt='' onClick={(e)=>setselectedimg('img3')} ></img>
        </div>
        <div className='mainimg'>
            <img src={'http://localhost:1337'+data?.attributes?.[selectedimg]?.data?.attributes?.url } alt='' ></img>
        </div>
      </div>
      <div className='right'>
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>${data?.attributes?.price}</span>
        <p>
        {data?.attributes?.description}
        </p>
        <div className='quantity'>
            <button onClick={()=>setquantity((prev)=> prev==1?1:prev-1)} >-</button>
            {quantity}
            <button onClick={()=>setquantity(prev=>prev+1)} >+</button>
        </div>
        <button className='add' onClick={()=>dispatch(addtocart({
            id:data.id,
            title:data.attributes.title,
            description:data.attributes.description,
            ima:data.attributes.ima.data.attributes.url,
            price:data.attributes.price,
            quantity
        }))}>
            <AddShoppingCartIcon/>ADD TO CART
        </button>
        <div className='links'>
            <div className='item'>
                <FavoriteBorderIcon/>ADD TO WISHLIST
            </div>
            <div className='item'>
                <BalanceIcon/>ADD TO COMPARE
            </div>
        </div>
        <div className='info'>
            <span>Vendor: Exalt</span>
            <span>Net Quantity: 1 N</span>
            <span>Manufactured by: N/A</span>
        </div>
        <hr></hr>
        <div className='info'>
            <span>DESCRIPTION</span>
            <hr/>
            <span>ADDITIONAL INFORMATION</span>
            <hr/>
            <span>FAQ</span>
        </div>
      </div></>)}
    </div>
  )
}

export default Product
