import styles from '../styles/modules/subscribe.module.css';
import btnStyles from '../styles/modules/button.module.css';
import 'font-awesome/css/font-awesome.min.css';

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
            <div className={styles.subscribeWrapper}>
                <div className={styles.bellTextWrapper}>
                    <img loading="lazy" className={styles.bellImg} src="/notification.svg" alt="notification icon / bell"/>
                    <div className={styles.subscribeTextWrapper}>
                        <h2 className={styles.subscribeText1}>Subscribe to our newsletter</h2>
                        <span className={styles.subscribeText2}>to stay informed about latest updates</span>
                    </div>
                </div>
                <form>   
                    <input required type="email" name="email" id="emailInput" placeholder="&#xf003;  Your Email" style={{fontFamily: 'Manrope, Helvetica, sans-serif, FontAwesome'}}/>
                    <button className={`${btnStyles.btn} ${btnStyles.brand}`}>Subscribe</button>
                </form>
            </div>
        </section>
  )
}

export default Subscribe