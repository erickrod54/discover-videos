import { useRouter } from "next/router";
import React from "react";
import Modal from 'react-modal';
import styles from './video.module.css'
import clsx from 'classnames';

/**Discover-videos-app - version 4.15  - [videoId].js - 
 * Features:
 * 
 *      --> Adding structure for 'modalBody'
 * 
 * Note: reference docs:
 * 
 *  https://reactcommunity.org/react-modal/
*/

Modal.setAppElement('#__next')

const Video = () => {

    const router = useRouter();

    const video = {
        title: 'Hi cool Marvel',
        publishTime: '1990-01-01',
        description:'the full marvel movies, all the story developed in order to get an amazing marvel time',
        channelTitle: 'Marvel Studios',
        viewCount:10000    
    }
    
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