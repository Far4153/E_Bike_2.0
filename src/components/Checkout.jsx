import Navbar from "./Navbar";
import "../styles/Checkout.css";
import React, {useState}from 'react';
import products from "../data/products";
import { useCart } from './CartContext';




const Checkout = () => {
    const { cart } = useCart();
    const calculateSubtotal = () => {
        return cart.reduce((total, product) => total + parseInt(product.price.replace(/\D/g, ''), 10),0);
      };

    return (
        <div className="checkout-page">
        <Navbar style={{backgroundColor: "#8e2841"}}/>
        <div className="checkout-body">
            <div className="checkout-sec">
                <h1>Checkout</h1>
                <div className="stages">                            
                    <div>
                        <img src="/billing img.png"></img>
                    </div>
                    <hr></hr>
                    <div>
                        <img src="/payment img.png"></img>
                    </div>
                    <hr></hr>
                    <div>
                        <img src="/confirm img.png"></img>
                    </div>
                
                </div>

                <div className="billing-info">
                    <h2 id="heading1">Billing Information</h2>
                    <div className="inputs">
                        <div className="inputs-left">
                            <input placeholder="First Name"></input>
                            <input placeholder="First Name"></input>
                            <input placeholder="First Name"></input>
                            <input placeholder="First Name"></input>
                        </div>
                        <div className="inputs-right">
                            <input placeholder="First Name"></input>
                            <input placeholder="First Name"></input>
                            <input placeholder="First Name"></input>
                            <input placeholder="First Name"></input>
                        </div>

                    </div>
                </div>
            </div>
            <div className="cart-summary-sec">

                <table>
                <h3 id="heading2">Cart Summary</h3>
                <tbody>
                    {cart.map((product) => (
                      <React.Fragment key={product.id}> 
                      <tr>
                        <td>
                          <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
                        </td>
                        <td>
                          <p>{product.name}</p>
                        </td>
                        <td>
                          <p>{product.price}</p>
                        </td>
                        <td>
                          <p><button>+</button></p>
                        </td>
                        <td>
                          <p>{product.price}</p>
                        </td>
                        <td>
                          <p><button>-</button></p>
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
                        <h4>Grand Total</h4>
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
    )
} 

export default Checkout;