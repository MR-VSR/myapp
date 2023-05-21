import React from 'react'
import './card.css'

export default function card() {
    return (
        <div className='cardContainer'>
            <div className='headingContainer'>
                <p>NEW ON <span style={{color:"#2CBCAB"}}>Sellular</span></p>
            </div>
            <div className='textContainer'>
                <p>Participate in<span style={{color:"#2CBCAB"}}> Exhillarating</span> College Competitions</p>
            </div>
            <button>Explore Now</button>
        </div>
    )
}
