import React from 'react'
import phones from '../../apiData/phones&gadget'
import './ProductDetails.css'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useState,useEffect } from 'react';

const ProductDetails = () => {
  const [display, setDisplay] = useState('d-none')
  const { addItem } = useCart()
    let { id } = useParams();
    const product = phones.find(phones => String(phones.id) === id);

  

    const addedItems = ()=>{
      addItem(product)

      setTimeout(()=> {
        setDisplay('d-block')
      }, 2000)

      setTimeout(()=> {
        setDisplay('d-none')
      }, 4000)
    }

  return (
    <div className='container'>
      <div className={`fixed-top text-center py-2 addProduct ${display}`}><p>Product added successfully</p></div>
        <div className='row gx-1'>
          <section key={id} className="details-section bg-white mt-2 col-9" id='detail'>
                  <div className='row mt-3'>
                  <div className='col-4'>
                    <img src={product.imageUrl} alt="" className=''/>
                  </div>
                  
                  <div className='col-8'>
                      <h3>{product.name}</h3>
                      <h4>brand: </h4>
                      <div className='straight'></div>
                      <div className='d-flex align-items-end'>
                      <p className='me-1 pFirst'>{product.new}</p>
                      <p className='pSecond'>{product.old}</p>
                      </div>
                      <p className='pThird'>{Math.floor(Math.random() * 20)} units left</p>
                      <p className='pFourth'>+ shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)</p>
                     <div className='d-flex align-items-center'>
                     <div className='star-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                     <div className='random mt-1 ms-1'>({Math.floor(Math.random() * 300)} verified ratings)</div>
                     </div>
                     <div className='straight my-2'></div>
                     <p>VARIATION AVAILABLE</p>
                     <div className='variation py-1'>
                        black
                     </div>

                     <div className='my-2 py-2 toCart d-flex justify-content-between align-items-center px-2 mx-1' onClick={addedItems}>
                      <div className='cartImg'><MdAddShoppingCart /></div>
                      <p>ADD TO CART</p>
                      <div></div>
                      </div>
                  </div>
                  </div>
          </section>

          <section className='col-3'>

          </section>
        </div>
    </div>
  )
}

export default ProductDetails
