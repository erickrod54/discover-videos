import Card from "./card.component";
import styles from './section.cards.module.css';

/**Discover-videos-app - version 2.11 - SectionCards- Features:
 * 
 *      --> Adding an 'id' prop to test the scale flow.
 * 
 * Note: This scroll currentlly works in the inspection browser window
 * and for full screen i have to tap in the mouse wheel
*/


const SectionCards = (props) => {

    const { title } = props;

    return(
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                <Card id={0} imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
                <Card imgUrl='/statics/clifford.the.red.dog.png' size='large'/>
            </div>
        </section>
    )
}

export default SectionCards