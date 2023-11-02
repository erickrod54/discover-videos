import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Banner, Navbar, SectionCards } from '../components'
import { getVideos } from '../lib/videos';


/**Discover-videos-app - version 2.18 - index js - Features:
 * 
 *      --> Setting 'await getVideos()'
 * 
 * Note: Because the getVideos() change to 'async' when is called
 * will change to 'await'
*/

export async function getServerSideProps() {
  const disneyVideos = await getVideos();

  return {
    props: { disneyVideos }, // will be passed to the page component as props
  };
}

export default function Home({ disneyVideos }) {
  console.log({ disneyVideos });

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar username='netseriesuser@gmail.com'/>
      <Banner 
        title='Clifford the red dog' 
        subtitle='a very cute dog' 
        imgUrl={'/statics/clifford.the.red.dog.png'}/>
        <div className={styles.sectionWrapper}>
          <SectionCards title='Disney'  videos={disneyVideos} size='large'/>
          <SectionCards title='Productivity'  videos={disneyVideos} size='medium'/>
        </div>
    </div>
  )
}
