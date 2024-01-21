import React from 'react'
import './categories.scss'
import { Link } from 'react-router-dom'
import Products from './Products'
function Categories() {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
            <img src='https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=800'></img>
            <button >
                <Link className='link' to='/products/3'>Sale</Link>
            </button>
        </div>
        <div className='row'>
        <img src='https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&w=800'></img>
            <button >
                <Link className='link' to="/products/1">Women</Link>
            </button>
           
        </div>
      </div>
      <div className='col'>
        <div className='row'>
            <img src='https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=800'></img>
                <button >
                    <Link className='link' to="/products/4">New Season</Link>
                </button>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
            <div className='col'>
                <div className='row'>
                <img src='https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=800'></img>
                <button >
                    <Link className='link' to="/products/2">Men</Link>
                </button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                <img src='https://images.pexels.com/photos/12005660/pexels-photo-12005660.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'></img>
                    <button >
                        <Link className='link' to="/products/5">Accessories</Link>
                    </button>
                </div>
            </div>
        </div>
        <div className='row'>
            <img src='https://images.pexels.com/photos/428363/pexels-photo-428363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                <button >
                    <Link className='link' to="/products/6">Shoes</Link>
                </button>
        </div>
        
      </div>

    </div>
  )
}

export default Categories
