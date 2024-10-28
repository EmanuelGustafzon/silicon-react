import Feature from '../components/Feature'
import styles from '../styles/modules/features.module.css'
const Features = () => {
  return (
    <section id='features' className={styles.features}>
            <div className={styles.featuresIphoneImage}>
                <img loading="lazy" src="/features-section-iphone.svg" alt="Iphone with Sillicon app"/>
            </div>
            <div className={styles.featuresContainer}>
                <div>
                    <h2 className={styles.featuresHeading}>App Features</h2>
                    <p className={styles.featuresDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>
                <div className={styles.featuresCardsWrapper}>
                    <Feature iconSrc='/credit-card-icon.svg' iconAltText='credit card' heading='Easy Payments' content='Id mollis consectetur congue egestas egestas suspendisse blandit justo.'/>
                    <Feature iconSrc='/data-security-icon.svg' iconAltText='data security icon' heading='Data Security' content='Id mollis consectetur congue egestas egestas suspendisse blandit justo.'/>
                    <Feature iconSrc='/costs-stats-icon.svg' iconAltText='costs statistics icon' heading='Cost Statistics' content='Id mollis consectetur congue egestas egestas suspendisse blandit justo.'/>
                    <Feature iconSrc='/chat-icon.svg' iconAltText='chat bubble icon' heading='Support 24/7' content='Id mollis consectetur congue egestas egestas suspendisse blandit justo.'/>
                    <Feature iconSrc='/wallet-icon.svg' iconAltText='wallet icon' heading='Regular Cashback' content='Id mollis consectetur congue egestas egestas suspendisse blandit justo.'/>
                    <Feature iconSrc='/smily-icon.svg' iconAltText='Happy smily icon' heading='Top Standards' content='Id mollis consectetur congue egestas egestas suspendisse blandit justo.'/>
                </div>
            </div>
        </section>
  )
}

export default Features