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

      const uncheckedImage = "/uncheckbox.png";
      const checkedImage = "/checkbox.png";
  
      const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
      const [selectedUpiCheck, setSelectedUpiCheck] = useState(null);

      function handlePaymentMethodClick(method){
        setSelectedPaymentMethod(method)
      };
      function handleUpiCheck(method){
        setSelectedUpiCheck(method)
      };

    return (
        <div className="payment-page">
        <Navbar style={{backgroundColor: "#8e2841"}}/>
        <div className="checkout-body">
            <div className="checkout-sec">
                <h2>Payment</h2>
                <div className="stages">                            
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/billing_img.png`}></img>
                    </div>
                    <hr></hr>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/payment_active2.png`}></img>
                    </div>
                    <hr></hr>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/confirm_img.png`}></img>
                    </div>
                
                </div>

                <div className="checkbox-sec">
                    <div className="debit" onClick={() => handlePaymentMethodClick('debit')}>
                        <img src= {selectedPaymentMethod === "debit" ? checkedImage : uncheckedImage}/> 
                        {/* as uncheckedimage are the constants of js do they need to be in the curlybraces */}
                        <b>Debit Card</b>
                    </div>
                    <div className="credit" onClick={() => handlePaymentMethodClick("credit")}>
                        <img src= {selectedPaymentMethod === "credit" ? checkedImage : uncheckedImage} />
                        <b>Credit Card</b>
                    </div>
                    <div className="UPI" onClick={() => handlePaymentMethodClick("UPI")}>
                        <img src={selectedPaymentMethod === "UPI"? checkedImage : uncheckedImage} />
                        <b>UPI ID</b>
                    </div>
                
            
                </div>

                {selectedPaymentMethod === 'debit' && (
                <div className="debit-card-part">
                    
                    
                    <div className="image-sec">
                        <div className="debit-img">
                            <img src={`${process.env.PUBLIC_URL}/debit_card.png`}/>
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
                </div>
                )}
                {selectedPaymentMethod === 'credit' && (
                <div className="debit-card-part">
                    
                    
                    <div className="image-sec">
                        <div className="debit-img" id="credit-img">
                            <img src={`${process.env.PUBLIC_URL}/credit_card.png`}/>
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
                </div>
                )}


                {selectedPaymentMethod === 'UPI' && (
                <div className="UPI-part">
                    
                    
                    <div className="upis">
                        <div className="gpay">
                            <div className="gpayimg">
                            <img src={`${process.env.PUBLIC_URL}/googlepay.png`}/>
                            </div>
                            <h4>GOOGLE PAY</h4>
                            <div className="gpaycheck" onClick={() => handleUpiCheck("gpaycheck")} >
                                <img src={selectedUpiCheck === "gpaycheck"? checkedImage : uncheckedImage}/>
                            </div>
                        </div>
                        <div className="gpay">
                        <div className="paytmimg">
                            <img src={`${process.env.PUBLIC_URL}/paytm.png`}/>
                        </div>
                            
                            <h4>PAY TM</h4>
                            <div className="paytmcheck" onClick={() => handleUpiCheck("paytmcheck")}>
                                <img src={selectedUpiCheck === "paytmcheck"? checkedImage : uncheckedImage}/>
                            </div>
                        </div>
                        <div className="gpay">
                            <div className="phonepayimg">
                                <img src={`${process.env.PUBLIC_URL}/phonepay.png`}/>
                            </div>
                            <h4>PHONE PAY</h4>
                            <div className="phonepaycheck" onClick={() => handleUpiCheck("phonepaycheck")} >
                                <img src={selectedUpiCheck === "phonepaycheck"? checkedImage : uncheckedImage}/>
                            </div>
                        </div>
                        <div className="gpay">
                            <h3>Other UPI's</h3>
                            <div className="otherupischeck" onClick={() => handleUpiCheck("otherupischeck")}>
                                <img src={selectedUpiCheck === "otherupischeck"? checkedImage : uncheckedImage}/>
                            </div>
                        </div>
                    </div>
                        
                </div>
                )}

                <div id="proceed-btn">
                    <Link to="/confirmation"><button>Proceed</button></Link>
                </div>
                
            
            </div>

            <div className="cart-summary-sec">

                <div className="cart-cont">
                <table>
                <div style={{ display: 'flex' }} id="head">
                <h3>Cart Summarys</h3>
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