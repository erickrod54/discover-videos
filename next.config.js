/**Discover-videos-app - version 2.05  - Card js - Features:
 * 
 *      --> Adding 'images' domain unplash. 
 * 
 * Note: this is made in order to get the image
 * rendered
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images.unsplash.com']
  }
}

module.exports = nextConfig
