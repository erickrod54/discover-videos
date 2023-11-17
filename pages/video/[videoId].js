import { useRouter } from "next/router";
import React from "react";


/**Discover-videos-app - version 4.03  - [videoId].js - 
 * Features:
 * 
 *      --> Starting tests getting the 'videoId'
 *          from the route object
 * 
 * Note: the test is made when i try to manually set
 * the url to the / directory
*/


const Video = () => {

    const router = useRouter();
    
    console.log({router})

    return(
        <h2>Video Page {router.query.videoId}</h2>
    )
}

export default Video;