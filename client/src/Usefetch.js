import React from 'react'
import { makerequest } from './makerequest'
import { useState } from 'react'
import { useEffect  } from 'react'
const Usefetch = (url) => {
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(false)
    const [error,seterror]=useState(false)
    useEffect(()=>{
        const fetchData=async()=>{
        try{
            setloading(true);
          const res= await makerequest.get(url);
          setdata(res.data.data);
        }
        catch(err){
          seterror(true)
        }
        setloading(false)
      }
      fetchData()
      },[url])
  return {data,loading,error}
}

export default Usefetch
