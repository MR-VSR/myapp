import React from 'react'
import './card.css'

export default function bottomCard() {
    return (
        <div className='bottomCardContainer'>
            <div className='headingContainer'>
                <p>NEW ON <span style={{color:"#2CBCAB"}}>Sellular</span></p>
            </div>
            <div className='textContainer'>
                <p>Save big from<span style={{color:"#2CBCAB"}}> Offers</span> from Brands</p>
            </div>
            <button>Shop Now</button>
        </div>
    )
}