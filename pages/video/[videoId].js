import { useRouter } from "next/router";
import React from "react";
import Modal from 'react-modal';

/**Discover-videos-app - version 4.07  - [videoId].js - 
 * Features:
 * 
 *      -->  Implementing 'Modal' from react-modal
 * 
 * Note: the test is made when i try to manually set
 * the url to the / directory
*/

Modal.setAppElement('#__next')

const Video = () => {

    const router = useRouter();
    
    console.log({router})

    return(
        <div>
         video page {router.query.videoId}   
        <Modal
            isOpen={true} contentLabel="Watch the video"
      >
        <div>Modal Body</div>
        </Modal>
        </div>
    )
}

export default Video;