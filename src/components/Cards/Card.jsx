import React from 'react'
import '../Cards/card.css'
import { useState } from 'react'

const Card = (props) => {
    const [cardData, setCardData] = useState(props.data)
    
    const render2 = cardData.map((card,idx) => {
        return (
            <div key={idx} className='col-lg-2 col-4 g-1'>
                 
            <div class='tol'>
                <div id=''><img src={card.imagesrc} /></div>
            <p>{card.ProductName}</p>
                
                
                </div>    
            </div>
        )
    })

  return (
    <div>
        <div className='appliances my-3 container text-center'>
            <div className='card-text'>
                <h4>{props.title}</h4>
            </div>
            <div className=' items my-3'>
                <div className='row align-items-start'> 
                    {render2}
                </div>
            </div>
        </div>



        {/* <div className='appliances my-3'>
            <h4>Appliances Upgrade</h4>
        <div className='items my-3 my-3'>
            <div className='row mx-1 g-6'> 
            <div class='col g-0 mb-2' style={{marginLeft:'10px'}}>
                <div id='washer'><img src={card1}/></div>
            <p>Washing Machine</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='iron'><img src={card2}/></div>
            <p>Pressing Iron</p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='freezer'><img src={card3}/></div>
            <p>Freezer</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='fans'><img src={card4}/></div>
            <p>Fans</p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='conditioner'><img src={card5}/></div>
            <p>Air Conditioner</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='fridges'><img src={card6}/></div>
            <p>Fridges</p>
                </div>
            </div>
            </div>
        <div className='appliances my-3'>
            <h4>Shop From Our Collections</h4>
        <div className='items my-3'>
            <div className='row mx-1 g-6'> 
            <div class='col g-0 mb-2' style={{marginLeft:'10px'}}>
                <div id='13'><img src={card13}/></div>
            <p>Appliances Deals</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='14'><img src={card14}/></div>
            <p>Phone Deals </p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='15'><img src={card15}/></div>
            <p>Fashion Deals</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='16'><img src={card16}/></div>
            <p>Supermarket Deals</p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='17'><img src={card17}/></div>
            <p>Electronics</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='18'><img src={card18}/></div>
            <p>Beauty Deals</p>
                </div>
            </div>
            <div className='row mx-1 g-6'> 
            <div class='col g-0 mb-2' style={{marginLeft:'10px'}}>
                <div id='19'><img src={card19}/></div>
            <p>Computing Deals</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='20'><img src={card20}/></div>
            <p>Accessories Deals</p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='21'><img src={card21}/></div>
            <p>Gaming Deals</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='22'><img src={card22}/></div>
            <p>Power Deals</p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='23'><img src={card23}/></div>
            <p>Home & Office</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='24'><img src={card24}/></div>
            <p>Kids corner</p>
                </div>
            </div>

        <div className='appliances my-3'>
            <h4>Phone Deals</h4>
        <div className='items my-3'>
            <div className='row mx-1 g-6'> 
            <div class='col g-0 mb-2' style={{marginLeft:'10px'}}>
                <div id='25'><img src={card25}/></div>
            <p>Andriod Phones</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='26'><img src={card26}/></div>
            <p>IPhones</p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='27'><img src={card27}/></div>
            <p>Note Phones</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='28'><img src={card28}/></div>
            <p>Andriod Tablets</p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='29'><img src={card29}/></div>
            <p>Ipads</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='30'><img src={card30}/></div>
            <p>Fold Phones</p>
                </div>
            </div>
            </div>
        <div className='appliances my-3'>
            <h4>Jumia Football Zone</h4>
        <div className='items my-3'>
            <div className='row mx-1 g-6'> 
            <div class='col g-0 mb-2' style={{marginLeft:'10px'}}>
                <div id='31'><img src={card31}/></div>
            <p></p>
                </div>
            <div class='col p-0 mx-3 mb-2'>
                <div id='32'><img src={card32}/></div>
            <p></p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='33'><img src={card33}/></div>
            <p></p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='34'><img src={card34}/></div>
            <p></p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='35'><img src={card35}/></div>
            <p></p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='36'><img src={card36}/></div>
            <p></p>
                </div>
            </div>
            </div>
        <div className='appliances my-3'>
            <h4>Computing Deals</h4>
        <div className='items my-3'>
            <div className='row mx-1 g-6'> 
            <div class='col g-0 mb-2' style={{marginLeft:'10px'}}>
                <div id='37'><img src={card37}/></div>
            <p>MacBook</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='38'><img src={card38}/></div>
            <p>Printers</p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='39'><img src={card39}/></div>
            <p>Gaming Laptops</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='40'><img src={card40}/></div>
            <p>Monitors</p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='41'><img src={card41}/></div>
            <p>Modems</p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='42'><img src={card42}/></div>
            <p>Lenovo Laptops</p>
                </div>
            </div>
            </div>
        <div className='appliances my-3'>
            <h4>Health And Beauty</h4>
        <div className='items my-3'>
            <div className='row mx-1 g-6'> 
            <div class='col g-0 mb-2' style={{marginLeft:'10px'}}>
                <div id='43'><img src={card43}/></div>
            <p></p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='44'><img src={card44}/></div>
            <p></p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='45'><img src={card45}/></div>
            <p></p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='46'><img src={card46}/></div>
            <p></p>
                </div>
            <div class='col g-0 mb-2'>
                <div id='47'><img src={card47}/></div>
            <p></p>
                </div>
            <div class='col p-0 mx-1 mb-2'>
                <div id='48'><img src={card48}/></div>
            <p></p>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div> */}

    </div>
  )
}
export default Card
