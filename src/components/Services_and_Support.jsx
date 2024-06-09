import React from "react";
import Navbar from "./Navbar";
import "../styles/services_and_support.css";

function Services_and_Support(){
    return (
            <div className="services_and_support_page">
            <div id="nav">
                <Navbar />
            </div>
            <div id="services_and_support_heading">
                <h1>Services and Support</h1>
            </div>
            <div id="services_and_support_sub">
                <div className="row-1">
                    <div id="card-1">   
                        <h3>Customer Support</h3>
                        <p>Contact Information: Phone number, email address, and live chat options.
Operating Hours: Hours of availability for customer support</p>
                    </div>
                    <div id="card-2">
                        <h3>Warranty Information</h3>
                        <p>
                        Warranty Coverage: Details on what is covered under the warranty, including the duration and specific parts (e.g., battery, motor, frame).
Warranty Claims: Instructions on how to make a warranty claim, including necessary documentation and steps.
                        </p>
                    </div>
                </div>
                <div className="row-2">
                    <div id="card-3">
                        <h3>Maintenance Services</h3>
                        <p>Regular Maintenance: Information on scheduled maintenance services, including tuning, brake adjustments, and tire checks.
Battery Care: Tips and services related to battery maintenance, charging, and replacement.
Motor Maintenance: Services offered for motor upkeep and troubleshooting.</p>
                    </div>
                    <div id="card-4">
                        <h3>Repair Services</h3>
                        <p>In-House Repairs: Description of repair services available at the company’s service centers, such as fixing electrical issues, replacing parts, and general repairs.
Mobile Repair Services: Information on mobile repair options where technicians come to the customer’s location.</p>
                    </div>
                </div>

            </div>
            </div>
    )
}

export default Services_and_Support;