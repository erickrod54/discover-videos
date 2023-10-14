import Head from 'next/head'
import styles from '../styles/Home.module.css'

/**Discover-videos-app - version 1.01  - index js - Features:
 * 
 *      --> Editing titles
 * 
 * Note: Here is added the google font for all the document
*/

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Netflix Clone App</h1>
    </div>
  )
}
