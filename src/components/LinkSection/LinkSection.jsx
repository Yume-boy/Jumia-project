import './LinkSection.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';

import { FaPhoneAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { GiEyelashes } from "react-icons/gi";
import { GrDropbox } from "react-icons/gr";
import { CiApple } from "react-icons/ci";
import { PiCookingPotBold } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiTelevisionSimple } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
import { PiTShirt } from "react-icons/pi";
import { LuBaby } from "react-icons/lu";

const LinkSection = () => {
  const [show, useShow] = useState('d-none')
  const [show1, useShow1] = useState('d-none')
  const [show2, useShow2] = useState('d-none')
  const [show3, useShow3] = useState('d-none')
  const [show4, useShow4] = useState('d-none')
  const [show5, useShow5] = useState('d-none')
  const [show6, useShow6] = useState('d-none')
  const [show7, useShow7] = useState('d-none')
  const [show8, useShow8] = useState('d-none')
  const [show9, useShow9] = useState('d-none')
  const [show10, useShow10] = useState('d-none')
  const [show11, useShow11] = useState('d-none')
  const [show12, useShow12] = useState('d-none')


  function showContent() {
      useShow('d-block')
  }

  const hideContent = () => {
    useShow('d-none')
  }

  function showContent1() {
    useShow1('d-block')
}

const hideContent1 = () => {
  useShow1('d-none')
}

function showContent2() {
  useShow2('d-block')
}

const hideContent2 = () => {
useShow2('d-none')
}

function showContent3() {
  useShow3('d-block')
}

const hideContent3 = () => {
useShow3('d-none')
}

function showContent4() {
  useShow4('d-block')
}

const hideContent4 = () => {
useShow4('d-none')
}

function showContent5() {
  useShow5('d-block')
}

const hideContent5 = () => {
useShow5('d-none')
}

function showContent6() {
  useShow6('d-block')
}

const hideContent6 = () => {
useShow6('d-none')
}

function showContent7() {
  useShow7('d-block')
}

const hideContent7 = () => {
useShow7('d-none')
}

function showContent8() {
  useShow8('d-block')
}

const hideContent8 = () => {
useShow8('d-none')
}

function showContent9() {
  useShow9('d-block')
}

const hideContent9 = () => {
useShow9('d-none')
}

function showContent10() {
  useShow10('d-block')
}

const hideContent10 = () => {
useShow10('d-none')
}

function showContent11() {
  useShow11('d-block')
}

const hideContent11 = () => {
useShow11('d-none')
}

function showContent12() {
  useShow12('d-block')
}

const hideContent12 = () => {
useShow12('d-none')
}

  

 


  return (
    <div className="">
      <div className='d-flex justify-content-center text-white mt-1 text-center d-lg-none'>
        <h4 className='mb-0 link-header'>CALL TO ORDER: 0700 600 0000</h4>
      </div>
      <div className="">
        <div className="row  p-sm-2 g-2">
          <div className="d-md-none d-sm-none d-lg-block col-lg-2  position-relative">
            <div className='links mx-0'>
              <Link to='/category' href="" onMouseEnter={showContent} onMouseLeave={hideContent}><div className='icon1'><CiApple /></div> Supermarket</Link>
              <Link to='/category' href="" onMouseEnter={showContent1} onMouseLeave={hideContent1}><div className='icon1'><GiEyelashes /></div> Health & Beauty</Link>
              <Link to='/category' href="" onMouseEnter={showContent2} onMouseLeave={hideContent2}><div className='icon1'><GoHome /></div>Home & Office</Link>
              <Link to='/category' href="" onMouseEnter={showContent3} onMouseLeave={hideContent3}><div className='icon1'><PiCookingPotBold /></div>Appliances</Link>
              <Link to='/category' href="" onMouseEnter={showContent4} onMouseLeave={hideContent4}><div className='icon1'><IoPhonePortraitOutline /></div>Phones & Tablet</Link>
              <Link to='/category' href="" onMouseEnter={showContent5} onMouseLeave={hideContent5}><div className='icon1'><HiOutlineDesktopComputer /></div>Computing</Link>
              <Link to='/category' href="" onMouseEnter={showContent6} onMouseLeave={hideContent6}><div className='icon1'><PiTelevisionSimple /></div>Electronics</Link>
              <Link to='/category' href="" onMouseEnter={showContent7} onMouseLeave={hideContent7}><div className='icon1'><PiTShirt /></div>Fashion</Link>
              <Link to='/category' href="" onMouseEnter={showContent8} onMouseLeave={hideContent8}><div className='icon1'><LuBaby /></div>Baby Product</Link>
              <Link to='/category' href="" onMouseEnter={showContent9} onMouseLeave={hideContent9}><div className='icon1'><IoGameControllerOutline /></div>Gaming</Link>
              <Link to='/category' href=""onMouseEnter={showContent10} onMouseLeave={hideContent10}><div className='icon1'><CiDumbbell /></div>Sporting Goods</Link>
              <Link to='/category' href=""onMouseEnter={showContent11} onMouseLeave={hideContent11}><div className='icon1'><HiOutlineDotsCircleHorizontal /></div>Other categories</Link>
            </div>
            <div className={`position-absolute second ${show}`} >
                        <div class="row">
                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show1}`} >
            <div class="row">
                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show2}`} >
            <div class="row">
                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show3}`} >
            <div class="row">
                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show4}`} >
            <div class="row">
                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show5}`} >
            <div class="row">
                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show6}`} >
            <div class="row">
                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            
            </div>
            <div className={`position-absolute second ${show7}`} >
            <div class="row">
                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Home</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Features</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">Pricing</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">FAQs</Link></li>
                      <li class="nav-item "><Link to='/category' href="#" class="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div  className={`position-absolute second ${show8}`} >
                no8
            </div>
            <div className={`position-absolute second ${show9}`} >
                no9
            </div>
            <div className={`position-absolute second ${show10}`} >
                no10
            </div>
            <div className={`position-absolute second ${show11}`} >
                no 11
            </div>
            <div className={`position-absolute second ${show12}`} >
                no 12
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
          <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper d-none d-lg-block"

      >
        <SwiperSlide><img src="src/components/LinkSection/top-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-4.png" alt="" /></SwiperSlide>
      </Swiper>

      <Swiper
       calculateHeight:true
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={5}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoHeight={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        id ='linkSection'
        loop={true}
        modules={[Autoplay, Pagination, Navigation,]}
        className="linkSection d-lg-none"
        
      >
        <SwiperSlide><img src="src/components/LinkSection/top-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/components/LinkSection/top-4.png" alt="" /></SwiperSlide>
      </Swiper>

      

          </div>
          <div className="col-2 left d-md-none d-lg-block">
            <div className='call mb-3 d-flex flex-column justify-content-around ps-2'>
               <div className='d-flex '>
                <div className='pe-2 me-2 icon'>
                <FaPhoneAlt />
                </div>
                <div>
                <h6>CALL TO ORDER</h6>
                <p>0700-600-0000</p>
                </div>
               </div>
               <div className='d-flex align-items-center'>
               <div className='icon-1'>
               <BsShop />
               </div>
                <h6 className='ps-2'>Sell on Jumia</h6>
               </div>
               <div className='d-flex align-items-center'>
               <div className='icon-1'>
               <GrDropbox />
               </div>
                <h6 className='ps-2'>Best Deals</h6>
               </div>
            </div>
            <img src="src/components/LinkSection/JForce (1).png" alt="" />
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LinkSection