import React from 'react'
import './filterSection.css'
import { BsSearch } from "react-icons/bs";

const FilterSection = () => {
  return (
    <div>
      <div className='my-1 py-2 px-3 bg-white filter'>
        <div>
          <h6 className='text-uppercase fw-bold'>Category</h6>
          <div className="">
            <h6 className='fw-bold'>Phones & Tablets</h6>
            <p className="side-menu mb-0">Mobile Phone Accessories</p>
            <p className="side-menu mb-0">Mobile Phone</p>
            <p className="side-menu mb-0">Tablet Accessories</p>
            <p className="side-menu mb-0">Tablet</p>
            <p className="side-menu mb-0">TelePhone & Accessories</p>
          </div>
        </div>
        <hr className='mt-1' />
        <div>
          <h6 className='text-uppercase fw-bold'>Brand</h6>
          <div className="">
            <div className="input-group search-bar">
              <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
              <input type="text" className="form-control" placeholder="Search Products, brands and categories" aria-label="Search Products, brands and categories" aria-describedby="basic-addon2" />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default FilterSection
