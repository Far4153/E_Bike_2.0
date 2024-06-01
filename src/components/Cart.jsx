import React, {useState}from 'react';
import { useCart } from './CartContext';
// import Product from './Card';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "lucide-react";
import Navbar from './Navbar';
import "../styles/Cart.css";
import products from "../data/products";
import Card from "./Card";
// import { useCart } from './CartContext';


const Cart = () => {
    const { cart } = useCart();
  
    const cartSize = cart.length;
    console.log(cartSize);
    const [isHovered, setisHovered]=useState(false);

    

    const calculateSubtotal = () => {
    return cart.reduce((total, product) => total + parseInt(product.price.replace(/\D/g, ''), 10),0);
  };
  
    return (
      <div className="cart-page">
        <Navbar />

        <div className='sub-nav'>
          <h2>Cart</h2>
          <ul><Link to="/Cart" className="bikescart" onMouseEnter={()=>setisHovered(true)} onMouseLeave={()=>setisHovered(false)}><ShoppingCart  style={{ color: isHovered?"#FF3465" :"#ffffff" }}  size={35}/>
          <span>{cartSize}</span></Link></ul>
        </div>

        <div className='cart-grid'>
          <div className='summary-sec'>
              <div className='items'>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>subtotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
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
                
              </div>
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
                    <div className='checkout-btn'>
                      <Link to="/Checkout "><button > Checkout </button></Link>
                    </div>

                  </div>
                </div>
                  
              </div>
          </div>
          <div className='like-sec'>
              <h3>You may also like</h3>
              <div className='similar-bikes'>
                      
                {products.map(item => (<Link key={item.id} to={`/Product_page/${item.id}`}>
                <Card item={item} key={item.id} /></Link>))}

              </div>
          </div>

        </div>
      </div>
    );
  };
  
  export default Cart;
  
