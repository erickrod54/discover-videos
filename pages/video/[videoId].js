import { useRouter } from "next/router";
import React from "react";
import Modal from 'react-modal';
import styles from './video.module.css'

/**Discover-videos-app - version 4.11  - [videoId].js - 
 * Features:
 * 
 *      --> Adding youtube 'iframe' to the modal
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
      <iframe id="ytplayer" type="text/html" width="800" height="500"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameborder="0">
      </iframe>  
      </Modal>
        </div>
    )
}

export default Video;