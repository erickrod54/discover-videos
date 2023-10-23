import Image from "next/image";
import React from "react";
import styles from './card.module.css'

/**Discover-videos-app - version 2.02  - Card js - Features:
 * 
 *      --> Setting a default size 
 * 
 * Note: In order to add the pointer and more styles to the 
 * container
*/

const Card = (props) => {

    const { imgUrl, size = 'medium' } = props;

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem, 
        small: styles.smItem,
    }


    return(
        <div className={styles.container}>
            <div className={classMap[size]} >
                <Image  src={imgUrl} alt="image" layout="fill" className={styles.cardImg}/>
            </div>
        </div>
    )
}

export default Card;