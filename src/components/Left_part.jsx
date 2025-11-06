import React from "react";
// import bicycle2 from "../images/bicycle2.png";

function Left_part(){
    return(
    <div className="left-column">

        <div className="hero-sec">
            <h1>Take the streets.<span id="sub-heading">Cowboy 3</span></h1>
            <p>Shift your ride, not gears.<span id="heading-1"> Ease your path toward the fastest way to move in the city. Free your mind as the bike adapts intuitively to power the speed you need.</span></p>
            <div className="btns">
                <button id="btn-1">Book a test ride</button>
                <button id="btn-2">Configure yours</button>
            </div>
        </div>

        <div className="bottom-sec">
            <div className="small-bike" >
                <img src={`${process.env.PUBLIC_URL}/bicycle2.png`} />
            </div>

            <div className="sponsers">
                <img id="one" src="t2.png" />
                <img id="two" src="t3.png" />
                <img id="three" src="t4.png" />
                
            </div>
        </div>
    </div>

    )

}

export default Left_part;