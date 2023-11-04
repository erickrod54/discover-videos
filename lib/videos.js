import videoData from '../data/videos.json';

/**Discover-videos-app - version 2.21  - lib > videos - Features:
 * 
 *      --> Handling error case using try-catch
 * 
 * Note: 
 * 
 * Steps --> 
 * 
 *          1.- get and set API key in '.env.local'
 * 
 *          2.- fetch the response the http url and the key
 * 
 *          3.- await for the data in json format
 * 
 * for the stepts that that will wait, i have to set a 'await'
 * and for the whole function itself 'async'
*/

export const getVideos = async (searchQuery) => {

    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; 

    /**i add the try cath block to handle the errors gracefully */
    try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${YOUTUBE_API_KEY}`);
    
        const data = await response.json();
    
       
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