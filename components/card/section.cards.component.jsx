import Card from "./card.component";
import styles from './section.cards.module.css';

/**Discover-videos-app - version 2.14 - SectionCards- Features:
 * 
 *      --> Reciving 'size' as a prop to change it dynamiclly.
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
                        <Card key={index} imgUrl={imgUrl} size={size}/>
                    )
                })}
            </div>
        </section>
    )
}

export default SectionCards