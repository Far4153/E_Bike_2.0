import React from "react";

function Right_part(){
    return(
    <div className="right-column">
        <div className="container-1" >
            <div className="bigbike">
                <img src={`${process.env.PUBLIC_URL}/bicycle.png`}/>
            </div>
            <div className="rectangle">
                <div className="ratings">
                    <svg width="90" height="22" viewBox="0 0 90 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.5004 2.32382V9.38215L72.2097 11.1241L71.5001 7.86642L73.8868 5.69463L70.7475 5.40053L69.5004 2.32382ZM65.4796 13L66.5461 8.19219L63 4.95984L67.6711 4.53453L69.5004 0L71.3298 4.53362L76 4.95893L72.4548 8.19129L73.5213 12.9991L69.5004 10.4472L65.4796 13Z" fill="#FF3465"/>
                    <g clip-path="url(#clip0_2_44)">
                    <path d="M22.3525 11.9177L18.5244 14.2222L19.3792 9.59453L16.1584 6.3911L20.5152 5.83541L22.3525 1.55093L24.1898 5.83541L28.5466 6.3911L25.3258 9.59453L26.1807 14.2222L22.3525 11.9177Z" fill="#FF3465"/>
                    </g>
                    <path d="M38.7867 11.593L35.0418 13.8562L35.8781 9.31137L32.7273 6.16529L36.9894 5.61954L38.7867 1.41177L40.584 5.61954L44.8461 6.16529L41.6954 9.31137L42.5316 13.8562L38.7867 11.593Z" fill="#FF3465"/>
                    <g clip-path="url(#clip1_2_44)">
                    <path d="M6.77079 11.7342L2.92096 14L3.78066 9.45007L0.541626 6.30048L4.92311 5.75412L6.77079 1.54166L8.61847 5.75412L13 6.30048L9.76092 9.45007L10.6206 14L6.77079 11.7342Z" fill="#FF3465"/>
                    </g>
                    <path d="M52 10.8176L48.2918 13L49.1199 8.61747L46 5.58375L50.2203 5.05749L52 1L53.7797 5.05749L58 5.58375L54.8801 8.61747L55.7082 13L52 10.8176Z" fill="#FF3465"/>
                    <defs>
                    <clipPath id="clip0_2_44">
                    <rect width="12.9268" height="13.2222" fill="white" transform="translate(15.6199 1)"/>
                    </clipPath>
                    <clipPath id="clip1_2_44">
                    <rect width="13" height="13" fill="white" transform="translate(0 1)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <p style={{ position: "absolute", right: "95px", top: "240px", transform: "translateX(-50%)" , fontSize: "12px", fontWeight:"bold" }}>1000+ reviews</p>

                </div>
        </div>
        </div>
        <div className="container-2">
            <h1>25 km/h <p>Assist  Speed</p></h1>
            <h1>70 km <p>Battery Range</p></h1>
            <h1>3.5  h <p>Chargeing Time</p></h1>
            <h1>16.9 kg <p>Weight</p></h1>

        </div>
    </div>
    )
}


export default Right_part;