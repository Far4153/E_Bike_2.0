import React from 'react';
import "../styles/confirmation.css"

function Confirmation() {
    return(
        <div className='confirmation-page'>
            <div className='confirm-img'>
                <img src='orderconfirm.png' alt='confirm image' />
            </div>
            <div id='confirm-head'>
                Order Confirmed!
            </div>
            <div id='order-confirm-text'>
                Your order has been placed successfully<span> Order History</span>
                <p>Get the delivery by 20th dec - 30th dec</p>
                <span>Track My Order</span>
            </div>

            <div id='confirm-continue-button'>
                <button>Continue Shopping</button>
            </div>
        </div>
    )
}

export default Confirmation