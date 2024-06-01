import React, {useState} from "react";
import DropdownItem from "./DropdownItem";
import { ShoppingCart } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { LogIn } from "lucide-react";
import { Link } from 'react-router-dom';





function Navbar({ showCSection,showCartSection,size }) {

  const [open , setOpen]= useState(false);
  

   

    return (
      <div className="navbar">
        {/* Your navbar content goes here */}
        <div className="l-sec">Cowbox</div>
        {showCSection && <div className="c-sec">
          <div className="trigger" onClick={()=> setOpen(!open)} >
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.78571 11.25C0.797991 11.25 0 11.8086 0 12.5C0 13.1914 0.797991 13.75 1.78571 13.75H23.2143C24.202 13.75 25 13.1914 25 12.5C25 11.8086 24.202 11.25 23.2143 11.25H1.78571ZM1.78571 6.25C0.797991 6.25 0 6.80859 0 7.5C0 8.19141 0.797991 8.75 1.78571 8.75H23.2143C24.202 8.75 25 8.19141 25 7.5C25 6.80859 24.202 6.25 23.2143 6.25H1.78571Z" fill="#F8F8F8"/>
            </svg>
          </div>
          <div className="container">
            <div className={`dropdown-menu ${open? 'active':'inactive'}`}>
              <h3>Hi, There <br/> <span>Welcome</span></h3>
              <ul><Link to="/LogIn"><DropdownItem img={<LogIn />} text={"Log-In"}/></Link></ul>
              <ul><Link to="/Cart"><DropdownItem img={<ShoppingCart />} text={"Cart"}/></Link></ul>
              <ul><DropdownItem img={<ShoppingBag />} text={"Orders"}/></ul>
              {/* <ul><DropdownItem img={<ShoppingCart />} text={"Sign-up"}/></ul> */}
            </div>

          </div>
        </div>}

        <div className="r-sec">
        <Link to="/Bikes">
        <p>Bikes</p>
        </Link>
        {showCartSection && (
          <Link
            to={size === 0 ? "/EmptyCart" : "/Cart"}
            className={`cartsec ${open ? 'active' : 'inactive'}`}
          >
            <p>Cart</p>
            <span>{size}</span>
          </Link>
        )}
        
        <Link to="/About_Us">
        <p>About Us</p>
        </Link>
        <Link to="/Services_and_support">
        <p>Services and Support</p>
        </Link>
          
          
        </div>
      </div>
    );
  }

  export default Navbar;