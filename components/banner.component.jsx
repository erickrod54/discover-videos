import React from "react";
import styles from '../components/banner.module.css'

/**Discover-videos-app - version 1.07  - Banner js - Features:
 * 
 *      --> Applying styles to n Series.
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
                    <div className={styles.nseriesWrapper}>
                        <p>N</p>
                        <p>S E R I E S</p>
                    </div>
                    <h2 className={styles.title}>{title}</h2>
                    <h3 className={styles.subTitle}>{subtitle}</h3>
                    <button className={styles.btnWithIcon} onClick={handleOnPlay}>
                        <span className={styles.playText}>
                         Play  
                        </span>
                    </button>
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