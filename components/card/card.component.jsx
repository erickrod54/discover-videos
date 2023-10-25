import Image from "next/image";
import React, { useState } from "react";
import styles from './card.module.css';
import { motion } from "framer-motion";

/**Discover-videos-app - version 2.06  - Card js - Features:
 * 
 *      --> Implementing 'motion.div'. 
 * 
 * Note: This is a feature provided by Framer
 * react library, has a lot more to explore
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
            <motion.div 
                className={classMap[size]} 
                whileHover={{ scale: 1.2 }}>
                <Image  
                    src={imgSrc} 
                    alt="image" 
                    layout="fill" 
                    onError={handleOnError}
                    className={styles.cardImg}
                    />
            </motion.div>
        </div>
    )
}

export default Card;