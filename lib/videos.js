import videoData from '../data/videos.json';

/**Discover-videos-app - version 4.17  - lib > videos - Features:
 * 
 *      --> Modifying the Youtube API object 
 * 
 *      --> Rendering the data
 * 
 * Note: poipular videos is a diffeent API 'endpoint'
*/

export const getCommonVideos = async (url) => {

    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; 

    /**i add the try cath block to handle the errors gracefully */
    try {

        const BASE_URL = 'youtube.googleapis.com/youtube/v3'
        
        const response = await fetch(`https://${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`);

        const data = await response.json();
        
        if (data?.error) {
            console.error("Youtube API error", data.error);
            return [];
          }
       
          return data.items.map((item) => {
          console.log({item})

            /**here i shortcircuit the id to make it flow to the video id or item id */
            const id = item.id?.videoId || item.id;

            const snippet = item.snippet;
            return{
                title: snippet?.title,
                imgUrl:snippet.thumbnails.high.url,
                id,
                description: snippet.description,
                publishTime: snippet.publishedAt,
                channelTitle:snippet.channelTitle,
                statistics: item.statistics ? item.statistics : {viewCount: 0}
            }
        });
    } catch (error) {
        console.log('Something went wrong with video library', error)
        /**i return the empty array so the app won't crash */
        return []
    }
    
}

export const getVideos = (searchQuery) => {
    const URL = `search?part=snippet&q=${searchQuery}`;
    return getCommonVideos(URL)   
}

export const getPopularVideos = () => {
    const URL =
      "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";
    return getCommonVideos(URL);

  };

  export const getYoutubeVideoById = (videoId) => {
    const URL =
      `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;
    return getCommonVideos(URL);

  };