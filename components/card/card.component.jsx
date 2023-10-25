import Image from "next/image";
import React, { useState } from "react";
import styles from './card.module.css'

/**Discover-videos-app - version 2.05  - Card js - Features:
 * 
 *      --> Setting an external image default (source unplash). 
 * 
 * Note: Domain added at 'next.config' file
 * 
 * setting default values is part of Error handling
*/

const Card = (props) => {

    const { imgUrl = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2059&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', size = 'medium' } = props;

    const [ imgSrc, setImgSrc ] = useState(imgUrl)

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem, 
        small: styles.smItem,
    }

    const handleOnError = () => {
        console.log('hii error')
        setImgSrc('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2059&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
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