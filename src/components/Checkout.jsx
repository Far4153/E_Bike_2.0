import Navbar from "./Navbar";
import "../styles/Checkout.css";
import React, {useState}from 'react';
import products from "../data/products";
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';





const Checkout = () => {
    const { cart } = useCart();
    const calculateSubtotal = () => {
        return cart.reduce((total, product) => total + parseInt(product.price.replace(/\D/g, ''), 10),0);
      };

    return (
        <div className="checkout-page">
        <Navbar />
        <div className="checkout-body">
            <div className="checkout-sec">
                <h1>Checkout</h1>
                <div className="stages">                            
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/billing img.png`}></img>
                    </div>
                    <hr></hr>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/payment img.png`}></img>
                    </div>
                    <hr></hr>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/confirm img.png`}></img>
                    </div>
                
                </div>

                <div className="billing-info">
                    <h2 id="heading1">Billing Information</h2>
                    <div className="inputs">
                        <div className="inputs-left">
                            <input placeholder="First Name"></input>
                            <input placeholder="Email"></input>
                            <input placeholder="Address line 1"></input>
                            <input placeholder="City"></input>
                            <input placeholder="State"></input>
                        </div>
                        <div className="inputs-right">
                            <input placeholder="Last Name"></input>
                            <input placeholder="Phone"></input>
                            <input placeholder="Address line 2"></input>
                            <input placeholder="Country"></input>
                            <input placeholder="Zip code"></input>
                        </div>


                    </div>
                  <div className="btn-sec">
                    <Link to="/Payment"><button>Continue</button></Link>
                    {/* <button>Continue</button> */}
                  </div>
                </div>
            </div>
            <div className="cart-summary-sec">

                <div className="cart-cont">
                <table>
                <div style={{ display: 'flex' }}>
                <h3>Cart Summary</h3>
                </div>
                <tbody>
                    {cart.map((product) => (
                      <React.Fragment key={product.id}> 
                      <tr>
                        <td>
                          <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                        </td>
                        <td>
                          <p>{product.name}</p>
                        </td>
                        <td>
                          <p>{product.price}</p>
                        </td>

                      </tr>
                      <tr>
                        <td colSpan="6"><hr /></td>
                    </tr>

                      </React.Fragment>
                     
                    ))}
                  </tbody>
                </table>
                

                <div className='order'>
                <div className='order-box'>
                  <div className='for-margin'>
                  <div className='coupon'>
                    <input placeholder='Apply coupon code'/><button>+</button>
                  </div>
                    <h4>Order summary</h4>
                    <div className='order-rows'>
                      <div className='row'>
                        <p>Subtotal</p>
                        <p>${calculateSubtotal()}</p>
                      </div>
                        <hr></hr>
                      <div className='row'>
                        <p>Shipping charges</p>
                        <p>$20</p>
                      </div>
                        <hr></hr>
                      <div className='row'>
                        <h3>Grand Total</h3>
                        <h4>${calculateSubtotal()+20}</h4>
                      </div>
                    </div>
                    {/* <div className='checkout-btn'>
                      <Link to="/Checkout "><button > Checkout </button></Link>
                    </div> */}

                  </div>
                </div>
                </div>
                </div>

                
            </div>
        </div>

        </div>
    )
} 

export default Checkout;