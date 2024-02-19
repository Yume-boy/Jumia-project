import React from 'react'
import { useState } from 'react'
import './categoryProducts.css'
import phones from '../../apiData/phones&gadget'
import { FaStar } from "react-icons/fa";
import { CgDisplayGrid } from "react-icons/cg";
import { CgDisplaySpacing } from "react-icons/cg";

const CategoryProducts = () => {

  const [grid1, setGrid1] =useState('d-flex')
  const [grid2, setGrid2] =useState('d-none')

  const showGrid1 = () => {
    setGrid1('d-flex')
    setGrid2('d-none')
  }

  const showGrid2 = () => {
    setGrid1('d-none')
    setGrid2('d-block')
  }



  const render = phones.map((data, yes)=>{
        return (
          <div key={yes} className ='col-lg-3 col-6 col-md-4 my-2 item'>
            <div className='data'><img src={data.imageUrl} alt="" /></div>
            <p className='overFlow'>{data.name}</p>
            <div>
              <p className='pp1'>{data.newPrice}</p>
              <p className='pp2'>{data.oldPrice}</p>
            </div>
            <div className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <div className='express'>
              <img src="https://vendorhub.jumia.co.ke/wp-content/uploads/2017/08/Jumia-Express-logo-e1556633520715.png" alt="" />
            </div>
            <div className={`add text-center py-2 mt-3 mb-2`}>
              <h5>ADD TO CART</h5>
            </div>
          </div>
        )
  })

  const render2 = phones.map((data, yes)=>{
    return (
      <div key={yes} className ='col-lg-3 col-6 col-md-4 my-2 item-2 d-flex w-100'>
        <div className='data me-2'><img src={data.imageUrl} alt="" /></div>
       <div className='w-100'>
          <div className=' lord w-100'>
          <p className='main-pp'>{data.name}</p>
            <div>
              <p className='main-pp1'>{data.newPrice}</p>
              <p className='main-pp2'>{data.oldPrice}</p>
            </div>
       </div>
        <div className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
        <div className='lord-2 justify-content-between align-items-center'>
        <div className='express'>
          <img src="https://vendorhub.jumia.co.ke/wp-content/uploads/2017/08/Jumia-Express-logo-e1556633520715.png" alt="" />
        </div>
        <div className={`add-2 text-center py-2 mt-3 mb-2`}>
          <h5>ADD TO CART</h5>
        </div>  
        </div>
       </div>
      </div>
    )
})

  return (
    <div>
      <div className='my-1 bg-white pt-2 px-3 categoryProducts'>
        <div className='d-flex justify-content-between first'>
          <h3 className='fw-bold'>Phones, Tablets & Accessories</h3>
          <h4>Sort by: Popularity </h4>
        </div>
        <hr />
        <div className='category-second d-flex justify-content-between align-items-center'>
          <div className='pt-2'><p>5198761 products found</p></div>
          <div className='grid d-flex'>
            <div onClick={showGrid1}><CgDisplayGrid /></div>
            <div onClick={showGrid2}><CgDisplaySpacing /></div>
          </div>
        </div>
        <hr />
        <div className={`row ${grid1}`}>
          {render}
        </div>
        <div className={`${grid2}`}>
          {render2}
        </div>
      </div>
    </div>
  )
}

export default CategoryProducts
