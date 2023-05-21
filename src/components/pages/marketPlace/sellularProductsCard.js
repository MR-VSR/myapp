import React, { useState } from 'react';
import './productCard.css'
import ProductImage from '../../../assets/Rectangle_45.png'
import Share from '../../../assets/marketPlace/VectorShare.png'
import SellularTag from '../../../assets/marketPlace/secured.png'

export default function SellularProductsCard() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [active ,setActive] = useState(false);
    const slides = [
        ProductImage,
        ProductImage,
        ProductImage,
        ProductImage,
    ];


    const changeSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleClick = () => {
        setActive(prevState=>
            !prevState
        );
    };

    const closeOverlay = () => {
        setActive(false);
    }

    return (
        <div className='sellularProductCardContainer'>
        <div className='tagContainer' onClick={handleClick}><img src={SellularTag}/></div>
        <div className={active ? 'overlay active' : 'overlay'}><p>Overlay Content Here</p></div>
            <div className="carouselContainer productCarouselContainer">
                <div onClick={closeOverlay} className='carouselImageContainer'>
                    <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                </div>

                <div className="buttons">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            className={`carousel-button ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => changeSlide(index)}
                        />
                    ))}
                </div>
            </div>
            <div>
                <p className='productNameContainer'>Casio</p>
                <div className='shareImageContainer'><img src={Share}/></div>
                <p className='productDescriptionContainer'>CLASSWIZ fx-830T X Calculator</p>
                <div className='priceAndOfferContainer'>
                    <p className='offerPrice'>₹1000</p>
                    <p className='originalPrice'>₹1499</p>
                    <p className='percentageOff'>33% off</p>
                </div>
                <button className='viewButton'>View Detail</button>
            </div>
        </div>
    )
}
