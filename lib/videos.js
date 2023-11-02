import videoData from '../data/videos.json';

/**Discover-videos-app - version 2.18  - lib > videos - Features:
 * 
 *      --> Fetching data from the youtube API.
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

export const getVideos = async () => {

    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; 

    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=marvel%20universe%20trailers&key=${YOUTUBE_API_KEY}`);

    const data = await response.json();

   
    return data.items.map((item) => {
        return{
            title: item.snippet.title,
            imgUrl:item.snippet.thumbnails.high.url,
            id:item?.id?.videoId || 'no id',
        }
    });
}