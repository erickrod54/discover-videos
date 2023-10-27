import Card from "./card.component";
import styles from './section.cards.module.css';

/**Discover-videos-app - version 2.08 - SectionCards- Features:
 * 
 *      --> Adding classNames modules for styles.
 * 
 * Note: This component will wrap the cards and make them scroll
*/


const SectionCards = (props) => {

    const { title } = props;

    return(
        <section className={styles.container}>
            <h2 className={styles.title}>Disney</h2>
            <div className={styles.cardWrapper}>
                 <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
            </div>
        </section>
    )
}

export default SectionCards