import React, { useState } from 'react'
import './products.scss'
import List from './List'
import { useFetcher, useParams } from 'react-router-dom'
import Usefetch from './Usefetch'

function Products() {
    const catid=parseInt(useParams().id)
    const [maxprice,setmaxprice]=useState(1000)
    const [sort,setsort]=useState('asc')
    const [selectedsubcat,setselectedsubcat]=useState([]);
    const {data, loading, error}=Usefetch(`/subcategories?[filters][categories][id][$eq]=${catid}`)
    const handleChange=(e)=>{
        const value=e.target.value
        const ischecked=e.target.checked
        setselectedsubcat(
            ischecked?[...selectedsubcat,value]
            :selectedsubcat.filter((item)=>item!==value)
        )
    }
    console.log(selectedsubcat)
  return (
    <div className='products'>
      <div className='left'>
        <div className='filteritem'>
            <h2>Product Categories</h2>
            {data.map((item)=>(
                <div className='inputitem' key={item.id}>
                <input type='checkbox' id={item.id} value={item.id} onChange={handleChange}></input>
                <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
            ))}
            
            
        </div>
        <div className='filteritem'>
            <h2>Filter by Price</h2>
            <div className='inputitem'>
                <span>0</span>
                <input type='range' min={0} max={1000} onChange={(e)=>setmaxprice(e.target.value)}></input>
                <span>{maxprice}</span>
            </div>
        </div>
        <div className='filteritem'>
            <h2>Sort by</h2>
            <div className='inputitem'>
                <input type='radio' id='asc' value="asc" name="price" onChange={(e)=>setsort("asc")}></input>
                <label htmlFor='asc'>Price (Low-High)</label>
            </div>
            <div className='inputitem'>
                <input type='radio' id='dsc' value="dsc" name="price" onChange={(e)=>setsort("desc")}></input>
                <label htmlFor='dsc'>Price (High-Low)</label>
            </div>
        </div>
      </div>
      <div className='right'>
        <img className='catimg' src='https://www.forevernew.co.in/media/wysiwyg/Winter-wear-banner-desktop.jpg' alt=''></img>
        <List catid={catid} maxprice={maxprice} sort={sort} subcat={selectedsubcat} />
      </div>
    </div>
  )
}

export default Products
