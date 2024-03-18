import React,{useState} from "react";
import Navbar from "./Navbar";
import Right_part from "./Right_part";
import Left_part from "./Left_part";


function Mainbody(){
    // const [Cart, setCart] = useState([]);
    const [Cart, setCart] = useState([]);
    const size = Cart.length; 
    
    // Derive the size from the Cart state
    const handleClick =(item)=>{
        console.log(item);
        let isPresent = false;
        Cart.forEach((product) => {
        if (item.id === product.id)
            isPresent=true;
        })
        if (isPresent)
            return;
        setCart([...Cart, item]);
        console.log("Updated Cart:", [...Cart, item]);
        } 
    return(
        <div className="main">
            <Navbar showCSection={true}  size={Cart.length} showCartSection={true}/>
            <Left_part />
            <Right_part />
        </div>
    )
}

export default Mainbody;