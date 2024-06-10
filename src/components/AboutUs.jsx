import React from "react";
import Navbar from "./Navbar";
import "../styles/about_us.css";


function AboutUs(){
    return (
        <div className="about-us-page">
            <div id="nav">
                <Navbar />
            </div>
            <div id="aboutus_heading">
                <h1>About Us</h1>
            </div>
            <div id="aboutus_sub_heading">
                <h2>We Make your Road Easier and Healthier</h2>
                <p>At E-Bike, we're dedicated to transforming your daily commute and adventures into a journey of health and affordability. Our e-bikes are designed to provide a seamless and enjoyable ride, promoting a healthier lifestyle through increased physical activity. Not only do they help you stay active, but they also significantly reduce transportation costs. By choosing our e-bikes, you're opting for an eco-friendly, cost-effective solution that makes every road a little easier and a lot healthier. Join us in embracing a better way to travel—both for you and the planet.  </p>
            <div id="aboutus_button">
                <button>Contact us</button>
            </div>
            </div>

            
            
        </div>
    )
}

export default AboutUs;