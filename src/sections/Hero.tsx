import styles from '../styles/modules/hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import LinkButton from '../components/LinkButton';

const Hero = () => {
  return (
    <div className={styles.banner}>
    <div className={styles.bannerWrapper}>
        <h1 className={styles.bannerHeading}>Manage All Your Money in One App</h1>
        <div className={styles.bannerContent}>
            <p className={styles.bannerText}>We offer you a new generation of the mobile banking. 
                Save, spend & manage money in your pocket.
            </p>
            <div className={styles.bannerMarket}>
                <LinkButton link='https://www.apple.com/se/app-store/' color='primary' size='small' className={styles.marketBtn}>
                    <div>
                        <FontAwesomeIcon icon={faApple} size='2x'/>
                    </div>
                    <div>
                        <p className={styles.download}>Download on the</p>
                        <p className={styles.store}>App Store</p>
                    </div>
                </LinkButton>
                <LinkButton link='https://play.google.com/store/games?device=windows&pli=1' color='primary' size='small' className={styles.marketBtn}>
                    <img loading="lazy" className={styles.googlePlay} alt="google-play logo" src="/google-play.svg"/>
                    <div>
                        <p className={styles.download}>GET IT ON</p>
                        <p className={styles.store}>Google Play</p>
                    </div>
                </LinkButton>
            </div>
            <div className={styles.bannerScrollToDiscover}>
                <LinkButton link='/' color='white' form='round'>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </LinkButton>
                <span>Discover more</span>
            </div>
        </div>
        <div className={styles.phoneImgWrapper}>
            <img id={styles.phoneBottom} className={styles.bannerPhoneImage} src="/phone-bottom.svg" alt="Picture of phone with the sillicon app"/> 
            <img id={styles.phoneTop} className={styles.bannerPhoneImage} src="/phone-top.svg" alt="Picture of phone with the sillicon app"/> 
        </div>
    </div>
</div>
  )
}

export default Hero