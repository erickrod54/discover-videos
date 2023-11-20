import { useRouter } from "next/router";
import React from "react";
import Modal from 'react-modal';
import styles from './video.module.css'

/**Discover-videos-app - version 4.10  - [videoId].js - 
 * Features:
 * 
 *      --> Adding styles 'container' and 'overlay'
 * 
 * Note: reference docs:
 * 
 *  https://reactcommunity.org/react-modal/
*/

Modal.setAppElement('#__next')

const Video = () => {

    const router = useRouter();
    
    console.log({router})

    return(
        <div className={styles.container}>
        <Modal
            className={styles.modal}
            isOpen={true} contentLabel="Watch the video"
            onRequestClose={() => router.back()}
            overlayClassName={styles.overlay}
      >
        <div>Modal Body</div>
        </Modal>
        </div>
    )
}

export default Video;