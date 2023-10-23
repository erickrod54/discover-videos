import Image from "next/image";
import React from "react";
import styles from './card.module.css'

/**Discover-videos-app - version 2.00  - Card js - Features:
 * 
 *      --> Fixing image sizing 
 * 
 *     --> Adding 'cardImg' 
 * 
 * Note: Fixing image sizing by changing the classMap to 
 * the container
*/

const Card = (props) => {

    const { imgUrl, size } = props;

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem, 
        small: styles.smItem,
    }


    return(
        <div className={classMap[size]} >
            <Image  src={imgUrl} alt="image" layout="fill" className={styles.cardImg}/>
        </div>
    )
}

export default Card;