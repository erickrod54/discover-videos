import videoData from '../data/videos.json';

/**Discover-videos-app - version 2.22  - lib > videos - Features:
 * 
 *      --> Handling Youtube API error inside try-catch
 * 
 * Note: once the data is get any youtube API error is handled
*/

export const getVideos = async (searchQuery) => {

    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; 

    /**i add the try cath block to handle the errors gracefully */
    try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${YOUTUBE_API_KEY}`);
    
        
        const data = await response.json();
        
        if (data?.error) {
            console.error("Youtube API error", data.error);
            return [];
          }
       
        return data.items.map((item) => {

            /**here i shortcircuit the id to make it flow to the video id or item id */
            const id = item.id?.videoId || item.id;
            return{
                title: item.snippet.title,
                imgUrl:item.snippet.thumbnails.high.url,
                id:item?.id?.videoId || 'no id',
            }
        });
    } catch (error) {
        console.log('Something went wrong with video library', error)
        /**i return the empty array so the app won't crash */
        return []
    }
    
}