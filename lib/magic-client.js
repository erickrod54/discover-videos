import { Magic } from 'magic-sdk';

/**Discover-videos-app - version 3.13  - lib > magic-client - 
 * Features:
 * 
 *      --> Fixing error related with the 'window object'
 * 
 * Note: the shortcircuit flow condition
 * 
 *  typeof window !== "undefined" && ..
 * 
 * will create a flow where will build the magic
 * auth once the 'createMagic()' ins invoked
 * 
 * 
 *  https://magic.link/docs/api/client-side-sdks/web
*/


// Construct with an API key:
const createMagic = () => {
    return(
        typeof window !== "undefined" &&
        new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY)
    )
};

const magic = createMagic();

console.log("magic setup", magic)