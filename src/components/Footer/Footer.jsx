import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import { MdEmail, MdStars } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaTwitter, FaCcMastercard, FaMaxcdn } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IoIosArrowUp } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { RiVisaLine } from "react-icons/ri";
import { TbBrandAirbnb, TbBrandAngular, TbBrandAmongUs,  TbBrandAws } from "react-icons/tb";


const Footer = () => {
  return (
    <div className="">
      <footer className='footer-top-strip px-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 px-5 py-4">
              <img className='img-fluid' width={140} height={32} src="../public/jumia-logo-white.png" alt="" />
            </div>
            <div className="col-6 px-5 py-4">
              <h6 className='text-white left-text-header'>New to Jumia?</h6>
              <p className='text-white left-text-content'>
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
              <div className='d-flex align-items-center'>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                  <MdEmail className='fs-4' color='#a3a3a6' /></span>
                  <input type="text" className="form-control py-3" placeholder="Enter E-mail Address" aria-label="Enter E-mail Address" aria-describedby="basic-addon2" />
                </div>
                <button type="button" className="btn fw-semibold text-white px-4 py-3">Male</button> 
                <button type="button" className="btn fw-semibold text-white px-4 py-3">Female</button> 
              </div>   
            </div>
            <div className="col-4 px-5 py-4">
              <div className="d-flex align-items-start g-10">
                <div className="star-box d-flex align-items-center justify-content-center">
                  <MdStars width={32} height={32} className='m-1 fs-1 text-white' />
                </div>
                <div className="left-text">
                  <h6 className='text-white left-text-header'>New to Jumia?</h6>
                  <p className='text-white left-text-content'>
                    Get access to exclusive offers!
                  </p>
                </div>
              </div>
              <div>
                <img className='img-fluid me-2' width={120} height={82} src="../public/app-store.png" alt="" />

                <img className='img-fluid' width={120} height={32} src="../public/google-play.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom-strip px-5">
        <div className="container-xxl">
          <div className="row py-2 footer-border">
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>NEED HELP?</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <Link className='text-white footer-link '>
                  Chat with us
                </Link>
                <Link className='text-white footer-link '>
                  Help Center
                </Link>
                <Link className='text-white footer-link '>
                  Contact Us
                </Link>
              </div>

              <h4 className='text-white ps-5 mb-1 left-text-header'>USEFUL LINKS</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <Link className='text-white footer-link '>
                  Service Center
                </Link>
                <Link className='text-white footer-link '>
                  How to shop on Jumia?
                </Link>
                <Link className='text-white footer-link '>
                  Delivery options and timelines
                </Link>
                <Link className='text-white footer-link '>
                  How to return a product on Jumia?
                </Link>
                <Link className='text-white footer-link '>
                  Corporate and bulk purchases
                </Link>
                <Link className='text-white footer-link '>
                  Report a Product
                </Link>
                <Link className='text-white footer-link '>
                  Ship your package anywhere in Nigeria
                </Link>
                <Link className='text-white footer-link '>
                  Dispute Resolution Policy
                </Link>
                <Link className='text-white footer-link '>
                  Returns & Refund Timeline
                </Link>
                <Link className='text-white footer-link '>
                  Return Policy
                </Link>
              </div>
            </div>
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>ABOUT JUMIA</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <Link className='text-white footer-link '>
                  About us
                </Link>
                <Link className='text-white footer-link '>
                  Jumia careers
                </Link>
                <Link className='text-white footer-link '>
                  Jumia Express
                </Link>
                <Link className='text-white footer-link '>
                  Terms and Conditions
                </Link>
                <Link className='text-white footer-link '>
                  Privacy Notice
                </Link>
                <Link className='text-white footer-link '>
                  Jumia Store Credit Terms & Conditions
                </Link>
                <Link className='text-white footer-link '>
                  Jumia Payment Information Guidelines
                </Link>
                <Link className='text-white footer-link '>
                  Cookie Notice
                </Link>
                <Link className='text-white footer-link '>
                  Jumia Global
                </Link>
                <Link className='text-white footer-link '>
                  Official Stores
                </Link>
                <Link className='text-white footer-link '>
                  Flash Sales
                </Link>
              </div>
            </div>
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>NEED HELP?</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <Link className='text-white footer-link '>
                  Sell on Jumia
                </Link>
                <Link className='text-white footer-link '>
                  Vendor hub
                </Link>
                <Link className='text-white footer-link '>
                  Become a Sales Consultant
                </Link>
                <Link className='text-white footer-link '>
                  Become a Logistics Service Partner
                </Link>
                <Link className='text-white footer-link '>
                  Join the Jumia DA Academy
                </Link>
                <Link className='text-white footer-link '>
                  Join the Jumia KOL Program
                </Link>
              </div>
            </div>
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>JUMIA INTERNATIONAL</h4>
              <div className="d-flex">
                <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                  <Link className='text-white footer-link '>
                    Algeria
                  </Link>
                  <Link className='text-white footer-link '>
                    Egypt
                  </Link>
                  <Link className='text-white footer-link '>
                    Ghana
                  </Link>
                  <Link className='text-white footer-link '>
                    Ivory Coast
                  </Link>
                  <Link className='text-white footer-link '>
                    Kenya
                  </Link>
                </div>
                <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                  <Link className='text-white footer-link '>
                    Morocco
                  </Link>
                  <Link className='text-white footer-link '>
                    Senegal
                  </Link>
                  <Link className='text-white footer-link '>
                    Tunisia
                  </Link>
                  <Link className='text-white footer-link '>
                    Uganda
                  </Link>
                  <Link className='text-white footer-link '>
                    Zando
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-2 footer-border">
            <div className="col-3 pe-5 pb-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>JOIN US ON</h4>
              <div className='social-icons d-flex align-items-center ps-5 py-2 mb-2 '>
                <a href="" className="social-icons text-white fs-4 me-2">
                  <FaFacebookF />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-2">
                  <FaYoutube />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-2">
                  <TiSocialInstagram />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-2">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="col-6 pe-5 pb-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>PAYMENT METHODS & DELIVERY PARTNERS</h4>
              <div className='d-flex align-items-center ps-5 py-2 mb-2 '>
                <a href="" className="social-icons text-white fs-4 me-3">
                  <GiReceiveMoney />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <FaCcMastercard />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <RiVisaLine />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAirbnb />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <FaMaxcdn />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAmongUs />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAngular />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAws />
                </a>
              </div>
            </div>
          </div>
          <div className="row footer-border">
            <div className="col-12">
              <p className="text-center mb-0 text-white p-3 fs-6">
                &copy; {new Date().getFullYear()} Powered By Group 1
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className='small-screen'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center text-white mobile-top">
              <IoIosArrowUp />
              <span>Back to Top</span>
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-center text-white mobile-middle">
              <span>Chat with us</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Help Center</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Contact Us</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>terms & Conditions</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Privacy Notice</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Cookie Notice</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Become a Seller</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Report a Product</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center text-white mobile-middle">
              <span>Jumia Anniversary 2024</span>
              <hr className='mt-3' />
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer