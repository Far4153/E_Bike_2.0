import Navbar from "./Navbar";
import "../styles/Payment.css";
import React, {useState}from 'react';
import products from "../data/products";
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';





const Payment= () => {
    const { cart } = useCart();
    const calculateSubtotal = () => {
        return cart.reduce((total, product) => total + parseInt(product.price.replace(/\D/g, ''), 10),0);
      };

      const [currentImage, setImageClick] = useState("/uncheckbox.png");
      const [isChecked, setIsChecked] = useState(false);

      function handleImageClick(){
        setIsChecked(!isChecked);
        setImageClick(isChecked?'/uncheckbox.png':'/checkbox.png');
      };

    return (
        <div className="payment-page">
        <Navbar style={{backgroundColor: "#8e2841"}}/>
        <div className="checkout-body">
            <div className="checkout-sec">
                <h2>Payment</h2>
                <div className="stages">                            
                    <div>
                        <img src="/billing img.png"></img>
                    </div>
                    <hr></hr>
                    <div>
                        <img src="/payment active2.png"></img>
                    </div>
                    <hr></hr>
                    <div>
                        <img src="/confirm img.png"></img>
                    </div>
                
                </div>

                <div className="checkbox-sec">
                    <div className="debit">
                        <img src="checkbox.png" />
                        <b>Debit Card</b>
                    </div>
                    <div className="credit">
                        <img src={currentImage} onClick={handleImageClick} />
                        <b>Credit Card</b>
                    </div>
                    <div className="UPI">
                        <img src="uncheckbox.png" />
                        <b>UPI ID</b>
                    </div>
                
            
                </div>

                <div className="image-sec">
                    <div className="debit-img">
                        <img src="debit card.png"/>
                    </div>
                </div>

                <div className="card-info">
                    <div className="1">
                    <p>Card Number</p>
                    <input placeholder="1234 5678 1234 5678" />
                    </div>
                    <div className="2">
                    <p>Card Holder Name</p>
                    <input placeholder="JOHN DEPP" />
                    </div>
                    <div>
                    <p>EXP Date</p>
                    <input placeholder="mm / yyyy" />
                    </div>
                    <div>
                    <p>CVV</p>
                    <input placeholder="****" />
                    </div>



                </div>

                <div id="proceed-btn">
                    <button>Proceed</button>
                </div>
                
            
            </div>

            <div className="cart-summary-sec">

                <div className="cart-cont">
                <table>
                <div style={{ display: 'flex' }} id="head">
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
                        </div>
                    </div>
                </div>



            </div>
        </div>

                
            
    </div>

</div>
                )

    }


export default Payment