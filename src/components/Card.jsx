import React, { useContext, useState } from 'react';
import { Heart } from 'lucide-react';
import CartContext from './CartContext';
import "../styles/Bikes.css";


function Product({ item }) {
  const { name,price,image } =item;
  const [isHovered, setIsHovered] = useState(false);

  
  

  return (
    <div className="card">
      <img src={image}  />
      <br />
      <p>{name}</p>
      <br />
      <div className="price">
        <p>{price}</p>
        <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <Heart color="#ffffff" fill={isHovered ? '#ff0000' : 'transparent'} />
        </button>
      </div>
      <div className="buynow-btn">
        <button >ORDER NOW</button>
      </div>
    </div>
  );
}

export default Product;
