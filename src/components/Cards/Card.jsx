import React from 'react'
import '../Cards/card.css'
import card1 from '../Cards/images/card1.png'
import card2 from '../Cards/images/card2.png'
import card3 from '../Cards/images/card3.png'
import card4 from '../Cards/images/card4.png'
import card5 from '../Cards/images/card5.png'
import card6 from '../Cards/images/card6.png'

const Card = () => {
  return (
    <div>
        <div className='appliances my-3'>
            <h4>Appliances Upgrade</h4>
        <div className='items'>
            <div className='row mx-1 g-5'>
            <div className='col g-0 mb-2' style={{marginLeft: '10px'}}>
                <div id='washer'><img src={card1} alt="" />
            <p>Washing Machine</p>
                </div>
            </div>
            <div className='col p-0 mx-3 mb-2'>
                <div id='iron45rdv'><img src={card2} alt="" />
            <p>Pressing Iron</p>
                </div>
            </div>
            <div className='col g-0 mb-2'>
                <div id='freezer'><img src={card3} alt="" />
            <p>Freezer</p>
                </div>
            </div>
            <div className='col p-0 mx-3 mb-2'>
                <div id='fans'><img src={card4} alt="" />
            <p>Fans</p>
                </div>
            </div>
            <div className='col g-0 mb-2'>
                <div id='conditioner'><img src={card5} alt="" />
            <p>Air Condintioner</p>
                </div>
            </div>
            <div className='col p-0 mx-3 mb-2'>
                <div id='fridge'><img src={card6} alt="" />
            <p>Fridges</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card
