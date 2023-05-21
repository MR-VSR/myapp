import React from 'react'
import Calculator from '../../../assets/marketPlace/VectorCal.png'
import Furniture from '../../../assets/marketPlace/VectorFur.png'
import Electronics from '../../../assets/marketPlace/Vector.png'
import CycleRight from '../../../assets/marketPlace/VectorRight.png'
import CycleLeft from '../../../assets/marketPlace/VectorLeft.png'
import Calculators from '../../../assets/marketPlace/Rectangle_76.png'
import './categories.css'

export default function categories() {

    const categories = [
        { name: "Calculator", img: Calculator },
        { name: "Furniture", img: Furniture },
        { name: "Electronic", img: Electronics },
        { name: "Calculator", img: Calculator },
        { name: "Calculator", img: Calculators },
        { name: "Category", img: CycleRight },
        { name: "Category", img: CycleLeft },
        { name: "Moreee", img: "" },
    ]

    return (<>

        <div className='categoriesHeadingContainer'>Categories</div>
        <div className='differentCategoriesContainer'>
            <div className='individualCategoriesContainer'>
                {categories.map((name) => {
                    return (
                        <div className='individualCategoryContainer'>
                            <img src={name.img} />
                            <p>{name.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </>
    )
}
