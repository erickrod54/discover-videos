import Image from "next/image";
import React from "react";

/**Discover-videos-app - version 1.19  - Card js - Features:
 * 
 *      --> Destructuring props
 * 
 * Note: This is part of the initial composition of the app,
 * after this step every component will developed indiviually
*/

const Card = (props) => {

    const { imgUrl, size } = props;


    return(
        <div>
            <Image src={imgUrl} alt="image" width={300} height={300}/>
        </div>
    )
}

export default Card;