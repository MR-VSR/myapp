import React from 'react'
import SellularProductsCard from './sellularProductsCard'
import ProductsCard from './productCard'
import './productCard.css'

export default function card() {
    return (
        <>
            <div className='headingProductCard'>Fresh Recommendations</div>
                <SellularProductsCard />
                <ProductsCard />
        </>
    )
}
