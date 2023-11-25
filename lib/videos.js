import videoTestData from '../data/videos.json';

/**Discover-videos-app - version 5.00  - lib > videos - Features:
 * 
 *      --> Handling Youtube API limit by switching
 *          between cache data and API data
 * 
 * Note: Modifications in order to make this
 * possible are made at '.env.local' and videos js
 * file 
*/

const fetchVideos = async(url) => {
    const BASE_URL = 'youtube.googleapis.com/youtube/v3'
        
    const response = await fetch(`https://${BASE_URL}/${url}&key=${YOUTUBE_API_KEY}`);
    
    return await response.json();
}

export const getCommonVideos = async (url) => {

    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; 

    /**i add the try cath block to handle the errors gracefully */
    try {

        const isDev = process.env.DEVELOPMET;

        console.log({ isDev })

        const data = isDev ? videoTestData : await fetchVideos(url);

        if (data?.error) {
            console.error("Youtube API error", data.error);
            return [];
          }
       
          return data.items.map((item) => {
          //console.log({item})

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