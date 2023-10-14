import { Html, Head, Main, NextScript } from "next/document";

/**Discover-videos-app - version 1.00  - _document js - Features:
 * 
 *      --> Building Document js
 * 
 * Note: Here is added the google font for all the document
*/

export default function Document() {
  return (
    <Html>
      <Head>
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
         <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}