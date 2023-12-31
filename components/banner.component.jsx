import React from "react";
import styles from '../components/banner.module.css'
import Image from "next/image";
import { useRouter } from "next/router";

/**Discover-videos-app - version 4.06  - Banner js - Features:
 * 
 *      --> Building test route for the banner 'play button'.
 * 
 * Note: so fas props has been passed as placehodlers 
 * from the main component in the index js
*/

const Banner = (props) => {

    const {  title, subtitle, imgUrl, videoId } = props;

    const router = useRouter()

   const handleOnPlay = () => {
        console.log('Play!')
        router.push(`video/${videoId}`)
   }
    
    return(
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                <div className={styles.nseriesWrapper}>
                    <p className={styles.firstLetter}>N</p>
                    <p className={styles.series}>S E R I E S</p>
                </div>
                    <h2 className={styles.title}>{title}</h2>
                    <h3 className={styles.subTitle}>{subtitle}</h3>
                    <button className={styles.btnWithIcon} onClick={handleOnPlay}>
                        <Image src={'/statics/play.arrow.svg'} alt="Play icon" width={32} height={32}/>               
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