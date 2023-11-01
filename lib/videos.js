import videoData from '../data/videos.json';

/**Discover-videos-app - version 2.17  - lib > videos - Features:
 * 
 *      --> Handling 'id' error.
 * 
 * Note: the videos info comes from the json object in data
 * and this data comes from Youtube API 
*/

export const getVideos = () => {
   
    return videoData.items.map((item) => {
        return{
            title: item.snippet.title,
            imgUrl:item.snippet.thumbnails.high.url,
            id:item?.id?.videoId || 'no id',
        }
    });
}