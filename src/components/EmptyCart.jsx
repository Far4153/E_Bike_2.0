import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/confirmation.css"

function EmptyCart() {
    return(
        <div className='confirmation-page'>
            <div className='emptycart-img'>
                <img src={`${process.env.PUBLIC_URL}/emptycart.png`} alt='confirm image' />
            </div>
            <div id='confirm-head'>
                Hey, it looks empty !!!
            </div>
            <div id='order-confirm-text'>
            Let’s add something to make
                <p>your cart Heavy </p>
                {/* <span>Track My Order</span> */}
            </div>

            <div id='confirm-continue-button'>
                <Link to="/bikes"><button >Continue Shopping</button></Link>
            </div>
        </div>
    )
}

export default EmptyCart