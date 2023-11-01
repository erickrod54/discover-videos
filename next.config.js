/**Discover-videos-app - version 2.16  - Card js - Features:
 * 
 *      --> Adding youtube images domains 
 * 
 * Note: this is made in order to get the image
 * rendered
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images.unsplash.com', 'i.ytimg.com', 'yt3.ggpht.com']
  }
}

module.exports = nextConfig
