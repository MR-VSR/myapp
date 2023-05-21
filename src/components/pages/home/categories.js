import React from 'react'
import './categories.css'
import CalculatorR from '../../../assets/Calculator_R2.png';

export default function categories() {

    const categoryName = [
        "Calculator",
        "Calculator",
        "Calculator",
        "Calculator"
    ]

    return (
        <div className='categoriesContainer'>
            <div className='categoriesNameContainer'>
                <div className='categoryHeading'><p>Shop Categories</p></div>
                <div className='categoryBrowser'>Browse all</div>
            </div>
            <div className='categoryCardContainer'>
                {categoryName.map((Name) => (
                    <div className='categoryCard'>
                        <div className='imageContainer'>
                            <img src={CalculatorR} />
                        </div>
                        <div className='NameContainer'>

                            <p>{Name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
