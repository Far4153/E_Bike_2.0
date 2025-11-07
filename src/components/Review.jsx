import React from "react";

function Review(props){
    return (
        <div className="review">
            <div className="imageandname">
                <img id="profile" src={props.img} />
                <div className="nameandrating">
                    <h5>{props.name}</h5>
                    <img id="rating" src={`${process.env.PUBLIC_URL}/rating.png`}/>
                </div>
            </div>
          
            <p id="text">{props.review}
            </p>
            

            
        </div>
    )
}

export default Review;