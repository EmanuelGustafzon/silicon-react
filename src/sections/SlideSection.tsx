import Slider from '../components/Slider';
import styles from '../styles/modules/slideSection.module.css';

const SlideSection = () => {
  return (
    <section className={styles.slider}>
        <div className={styles.sliderWrapper}>
        <h2>How Does It Work?</h2>
        <Slider/>
        </div>
    </section>
  )
}

export default SlideSection