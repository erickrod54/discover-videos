import Image from "next/image";
import React from "react";
import styles from './card.module.css'

/**Discover-videos-app - version 1.20  - Card js - Features:
 * 
 *      --> Building 'classMap' 
 * 
 * Note: Building 'classMap' to dynamicly change image size 
 * using size as index
*/

const Card = (props) => {

    const { imgUrl, size } = props;

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem, 
        small: styles.smItem,
    }


    return(
        <div>
            <Image className={classMap[size]} src={imgUrl} alt="image" width={300} height={300}/>
        </div>
    )
}

export default Card;