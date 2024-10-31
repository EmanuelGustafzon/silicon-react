import Map from '../components/Map';
import styles from '../styles/modules/findUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import useCurrentDevice from '../hooks/useCurrentDevice';

const FindUs = () => {
    const device = useCurrentDevice()

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.mapWrapper}>
                    {device === 'mobile' && <Map width='100%' height='30em'/>}
                    {device === 'tablet' && <Map width='720px' height='30em'/>}
                    {device === 'desktop' && <Map width='45em' height='40em'/>}
                </div>
                <div className={styles.addressCardsWrapper}>
                    <div className={styles.addressCard}>
                        <h2>Medical Center 1</h2>
                        <div>
                            <span><FontAwesomeIcon icon={faMapMarker} color="#6366F1"/></span>
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </div>
                        <div>
                            <span><FontAwesomeIcon icon={faPhone} color="#6366F1"/></span>
                            (406) 555-0120
                        </div>
                        <div className={styles.openHour}>
                            <FontAwesomeIcon icon={faClock} color="#6366F1"/>
                            <div>
                                <p>Mon - Fri: 9:00 am - 22:00 am</p>
                                <p>Sat - Sun: 9:00 am - 20:00 am</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.addressCard}>
                        <h2>Medical Center 2</h2>
                        <div>
                            <span><FontAwesomeIcon icon={faMapMarker} color="#6366F1"/> </span>
                            2464 Royal Ln. Mesa,New Jersey 45463
                        </div>
                        <div>
                            <span><FontAwesomeIcon icon={faPhone} color="#6366F1"/> </span>
                            (406) 544-0123
                        </div>
                        <div className={styles.openHour}>
                            <FontAwesomeIcon icon={faClock} color="#6366F1"/>
                            <div>
                                <p>Mon - Fri: 9:00 am - 22:00 am</p>
                                <p>Sat - Sun: 9:00 am - 20:00 am</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindUs