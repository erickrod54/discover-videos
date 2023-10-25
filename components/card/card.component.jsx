import Image from "next/image";
import React, { useState } from "react";
import styles from './card.module.css'

/**Discover-videos-app - version 2.04  - Card js - Features:
 * 
 *      --> Handling Image Error using 'imgSrc'. 
 * 
 * Note: In order to add the pointer and more styles to the 
 * container
 * 
 * setting default values is part of Error handling
*/

const Card = (props) => {

    const { imgUrl = '/statics/clifford.the.red.dog.png', size = 'medium' } = props;

    const [ imgSrc, setImgSrc ] = useState(imgUrl)

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem, 
        small: styles.smItem,
    }

    const handleOnError = () => {
        console.log('hii error')
        setImgSrc('/statics/clifford.the.red.dog.png')
    }


    return(
        <div className={styles.container}>
            <div className={classMap[size]} >
                <Image  
                    src={imgSrc} 
                    alt="image" 
                    layout="fill" 
                    onError={handleOnError}
                    className={styles.cardImg}
                    />
            </div>
        </div>
    )
}

export default Card;