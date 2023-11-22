import { useRouter } from "next/router";
import React from "react";
import Modal from 'react-modal';
import styles from './video.module.css'
import clsx from 'classnames';

/**Discover-videos-app - version 4.16  - [videoId].js - 
 * Features:
 * 
 *      --> Implementing 'ISR' (Incremental Server Side Regeneration)
 * 
 * Note: By Implemnenting 'getStaticProps()' and 
 * 'getStaticPaths' the 'ISR' is being applied and the videos
 * id addded to 'getStaticPaths' will make a super fast loading
 * of those resources
 * 
 * for now im getting the video info hardcoded but idealy will
 * como from the API later 
*/

Modal.setAppElement('#__next')

export async function getStaticProps() {
    
    //data to fetch from API;

    const video = {
        title: 'Hi cool Marvel',
        publishTime: '1990-01-01',
        description:'the full marvel movies, all the story developed in order to get an amazing marvel time',
        channelTitle: 'Marvel Studios',
        viewCount:10000    
    }
    
    return{
        props:{
            video,
        },
        /**Next js will attempt to regenarate the page
         * when the request comes in at most once every
         * 10 seconds
         */
        revalidate:10, // in seconds
    }
}

export async function getStaticPaths() {
    const listOfVideos = ["udKE1ksKWDE", "daV3T2biCfA", "vGXERI3UW3k"];
    const paths = listOfVideos.map((videoId) => ({
      params: { videoId },
    }));
  
    return { paths, fallback: "blocking" };
  }

const Video = ({ video }) => {

    const router = useRouter();


    
    console.log({router})

    const { title, publishTime, description, channelTitle, viewCount } = video

    return(
        <div className={styles.container}>
        <Modal
            className={styles.modal}
            isOpen={true} contentLabel="Watch the video"
            onRequestClose={() => router.back()}
            overlayClassName={styles.overlay}
      >
        <iframe 
            id="ytplayer" 
            className={styles.videoPlayer}
            type="text/html" 
            width="800" 
            height="500"
            src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=1&origin=http://example.com&controls=0&rel=1`}
            frameborder="0">
        </iframe>

        <div className={styles.modalBody}>
            <div className={styles.modalBodyContent}>
                <div className={styles.col1}>
                    <p className={styles.publishTime}>
                        {publishTime}
                    </p>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <p className={styles.description}>
                        {description}
                    </p>
                </div>
                <div className={styles.col2}>
                <p className={clsx(styles.subText, styles.subTextWrapper)}>
                    <span className={styles.textColor}>Cast: </span>
                    <span className={styles.channelTitle}>{channelTitle}</span>
                </p>
                <p className={clsx(styles.subText, styles.subTextWrapper)}>
                    <span className={styles.textColor}>View Count: </span>
                    <span className={styles.channelTitle}>{viewCount}</span>
                </p>
                </div>
            </div>
        </div>  
      </Modal>
        </div>
    )
}

export default Video;