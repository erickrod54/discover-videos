import React from "react";


/**Discover-videos-app - version 1.05  - Banner js - Features:
 * 
 *      --> Adding button placeholder.
 * 
 * Note: so fas props has been passed as placehodlers 
 * from the main component in the index js
*/

const Banner = (props) => {

    const {  title, subtitle, imgUrl } = props;

   const handleOnPlay = () => {
        console.log('Play!')
   }
    
    return(
        <>
            <div>
                <h2>
                    {title}
                </h2>
                <h3>
                    {subtitle}
                </h3>
                <button onClick={handleOnPlay}>Play</button>
            </div>
            <div
                style={{
                backgroundImage: `url(${imgUrl})`,
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                }}
            ></div>
        </>
        
    )
}

export default Banner;