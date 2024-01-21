//api-92312a337935c9de15f1121653cc0afe345c5f68c82fecc075ffb3cf03f436f4dbf7021e9b01ca68e17025a8edc503f74eb73f06b290201cc2e2ecaf23909aa767e0324bbf40361709dc29e3d6365d3bff0235feee881c8fdc857c1ff3d64edc98f0119c386b9875db14a6051813ab6ee4fa68be82c55cac3b81cf12e1e25870

import React from 'react'
import './cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeitem, resetcart } from './Cartreducer';
import { loadStripe } from '@stripe/stripe-js';
import { makerequest } from './makerequest';

function Cart() {
  const products=useSelector(state=>state.cart.products)
  const dispatch = useDispatch();
  const totalprice=()=>{
    let total=0
    products.forEach((item)=>{total+=item.quantity*item.price})
    return total.toFixed(2);
  }

  const stripePromise = loadStripe('pk_test_51NTiVHSBfN5I5yfE0BuVYc8in5g5fweAvaUGLtFRE9gGVkWWTlIGHKC2Ak7Bw47Uybv1YvOkTuCaNuU32lxwKUPi00drdPuFeQ');

  const handlepayment=async()=>{
    try{
      const stripe=await stripePromise;
      const res=await makerequest.post("/orders",{
        products,
      })
      await stripe.redirectToCheckout({
        sessionId:res.data.stripeSession.id,
      })
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={'http://localhost:1337' + item.ima} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={()=>dispatch(removeitem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalprice()}</span>
      </div>
      <button onClick={handlepayment} >PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetcart())}>
        Reset Cart
      </span>
    </div>
  )
}

export default Cart
