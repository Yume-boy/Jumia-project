import './LinkSection.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';

import { FaPhoneAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { GrDropbox } from "react-icons/gr";

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
    <div className="linkSection" style={{fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif'}}>
      <div className="">
        <div className='d-flex justify-content-center text-white call-to-order mt-2 align-center pt-2 d-lg-none'>
          <h4>CALL TO ORDER: 0700 600 0000</h4>
        </div>
        <div className="row p-5 p-sm-2">
          <div className="d-md-none d-sm-none d-lg-block col-lg-2 px- position-relative">
            <div className='links mx-0'>
              <a href="" onMouseEnter={showContent} onMouseLeave={hideContent}>Supermarket</a>
              <a href="" onMouseEnter={showContent1} onMouseLeave={hideContent1}>Supermarket</a>
              <a href="" onMouseEnter={showContent2} onMouseLeave={hideContent2}>Supermarket</a>
              <a href="" onMouseEnter={showContent3} onMouseLeave={hideContent3}>Supermarket</a>
              <a href="" onMouseEnter={showContent4} onMouseLeave={hideContent4}>Supermarket</a>
              <a href="" onMouseEnter={showContent5} onMouseLeave={hideContent5}>Supermarket</a>
              <a href="" onMouseEnter={showContent6} onMouseLeave={hideContent6}>Supermarket</a>
              <a href="" onMouseEnter={showContent7} onMouseLeave={hideContent7}>Supermarket</a>
              <a href="" onMouseEnter={showContent8} onMouseLeave={hideContent8}>Supermarket</a>
              <a href="" onMouseEnter={showContent9} onMouseLeave={hideContent9}>Supermarket</a>
              <a href=""onMouseEnter={showContent10} onMouseLeave={hideContent10}>Supermarket</a>
              <a href=""onMouseEnter={showContent11} onMouseLeave={hideContent11}>Supermarket</a>
              <a href=""onMouseEnter={showContent12} onMouseLeave={hideContent12}>Supermarket</a>
            </div>
            <div className={`position-absolute second ${show}`} >
                        <div class="row">
                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
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
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
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
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
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
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
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
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
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
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
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
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>

                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
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
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>

                  <div class="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Section</h6>
                    <hr />
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                      <li class="nav-item "><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show8}`} >
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
        navigation={true}
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
        loop={true}
        modules={[Autoplay, Pagination, Navigation,]}
        className="mySwiper d-lg-none"
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
            <img src="src/components/LinkSection/JForce (1).png" alt="" style={{width :'100%', height:'180px'}} />
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LinkSection