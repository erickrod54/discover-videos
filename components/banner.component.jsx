import React from "react";
import styles from '../components/banner.module.css'

/**Discover-videos-app - version 1.06  - Banner js - Features:
 * 
 *      --> Writting module styles classnames and wrapping
 *          jsx elements.
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
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                    <h2 className={styles.title}>{title}</h2>
                    <h3 className={styles.subtitle}>{subtitle}</h3>
                    <button className={styles.btnWithIcon} onClick={handleOnPlay}>Play</button>
                </div>
            </div>
            <div
                className={styles.bannerImg}
                style={{
                backgroundImage: `url(${imgUrl})`,
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                }}
            ></div>
        </div>
      
        
    )
}

export default Banner;