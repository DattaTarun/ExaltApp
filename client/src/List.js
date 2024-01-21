import React from 'react'
import Card from './Card'
import './list.scss'
import Usefetch from './Usefetch'
function List({catid,sort,maxprice,subcat}) {
  const {data, loading, error}=Usefetch(`/products?populate=*&[filters][categories][id]=${catid}${subcat.map((item)=>`&[filters][subcategories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxprice}&sort=price:${sort}`)
  return (
    <div className='list'>
      {loading ? "loading" : data?.map(item=>(
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
