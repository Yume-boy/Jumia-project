import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css'
import Cart from './components/Cart/Cart';
import Category from './components/Category/Category';
import { CartProvider } from 'react-use-cart';


const App = () => {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/category' element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
