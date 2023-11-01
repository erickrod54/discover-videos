import videoData from '../data/videos.json';

/**Discover-videos-app - version 2.15  - lib > videos - Features:
 * 
 *      --> Testing 'getVideos' handler to get the videos info
 * 
 * Note: the videos info comes from the json object in data
*/

export const getVideos = () => {
    /**i get it by items just tp test it */
    return videoData.items;
}