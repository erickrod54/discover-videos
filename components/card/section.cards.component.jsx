import Link from "next/link";
import Card from "./card.component";
import styles from './section.cards.module.css';

/**Discover-videos-app - version 4.05 - SectionCards- Features:
 * 
 *      --> Implementing 'Link' component from next.
 * 
 *      --> Getting dynamicly the 'id'
 * 
 * Note: Refactoring 'Card' render in order to receive and render 
 * an array
*/


const SectionCards = (props) => {

    const { title, videos, size } = props;

    console.log({ videos })

    return(
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, index) => {
                    const { imgUrl } = video;
                    return(
                        <Link href={`/video/${video.id}`}>
                            <Card key={index} imgUrl={imgUrl} size={size}/>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default SectionCards