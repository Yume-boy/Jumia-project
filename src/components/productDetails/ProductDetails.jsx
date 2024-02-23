import React from 'react'
import phones from '../../apiData/phones&gadget'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    let { id } = useParams();
    const product = phones.find(phones => String(phones.id) === id);
  return (
    <div>
        <section key={id} className="details-section" id='detail'>
                <img src={product.imageUrl} alt=""/>
                
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.new}</p>
                </div>
            </section>
    </div>
  )
}

export default ProductDetails
