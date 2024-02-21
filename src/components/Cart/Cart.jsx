import './Cart.css'
import React from 'react'
import { useCart } from 'react-use-cart'
import phones from '../../apiData/phones&gadget'
import { useState } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import ProductSection from '../ProductSection/ProductSection';
import imageOne from '../../apiData/imageOne'
import imageTwo from '../../apiData/imageTwo'

const Cart = () => {
  const [data, setData] = useState(phones)
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart()

  if (isEmpty) return <h1>Your cart is empty</h1>

  return (
    <div className='container '>
      
        <div className='row mt-3 px-3'>
        
          <div className='col-lg-9 col-12 cart-items'>
          <div className='my-3'><h4>Cart ({totalUniqueItems})</h4></div>
          { items.map((data, yes)=>{
    return (
      <div key={yes} className ='my-2  d-flex '>
        <div className='cart-img '><img src={data.imageUrl} alt="" /></div>
       <div className=' w-100'>
            <div className=' cart-between justify-content-between '>
              <p className='cb-1'>{data.name}</p>
            <div>
              <p className=''>{data.new}</p>
            </div>
       </div>
        <div className='express'>
          <img src="https://vendorhub.jumia.co.ke/wp-content/uploads/2017/08/Jumia-Express-logo-e1556633520715.png" alt="" />
        </div>
        <div className=' d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center remove' onClick={()=>removeItem (data.id)}><MdOutlineDeleteOutline /><h6 className='ms-2'>Remove</h6></div>
        <div className={`d-flex text-center  py-2 mt-3 mb-2`}>
          <button className='added mx-3' onClick={()=>updateItemQuantity(data.id, data.quantity - 1)}  >-</button>
          <p className='mt-2'>{data.quantity}</p>
          <button className='added mx-3'  onClick={()=>updateItemQuantity(data.id, data.quantity + 1)}>+</button>
        </div>  
        </div>
       </div>
      </div>
    )
})}
          </div>
          <div className='col-12 col-lg-3 cart-items-2'>
            <div className=' px-3 py-3 bg-white'>
              <h6 className='c-color'>CART SUMMARY</h6>
              <div className='ruler'></div>
              <div className='d-flex justify-content-between align-items-center'>
                <div><p className='mb-0 c-color'>subtotal</p></div>

                <div className='total'>
                  <h4>₦ {cartTotal}</h4>
                </div>
              </div>
              <div className='ruler mb-3'></div>
              <div className='checkout'><h4>Checkout(₦ {cartTotal})</h4></div>
                  

            </div>
          </div>
        </div>

      <ProductSection data={imageOne}  left='Appliances' Right="See all >" color='#fff'/>
      <ProductSection data={imageTwo} left='Appliances' Right="See all >" color='#f43f44'/>
    </div>
  )
}

export default Cart