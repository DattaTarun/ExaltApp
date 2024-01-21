import React, { useEffect, useState } from 'react'
import './featured.scss'
import Card from './Card'
import axios from 'axios'
import Usefetch from './Usefetch'
function Feautured({ type }) {
  const{data,loading,error}=Usefetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    
  return (
    <div className="featuredProducts">
    <div className="top">
      <h1>{type} products</h1>
      <p>
      Discover style at its peak with our featured and trending products at Exalt. From statement pieces to everyday essentials, each item is handpicked to elevate your wardrobe. Shop the latest trends and timeless classics that showcase the essence of Exalt's fashion-forward approach. Elevate your look with our carefully curated featured products – where fashion meets distinction.
      </p>
    </div>
    <div className="bottom">
      {error ? "something went wrong" : loading?"loading":data?.map((item)=> <Card item={item} key={item.id} />)}
    </div>
  </div>
  )
}

export default Feautured
