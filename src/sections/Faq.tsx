import styles from '../styles/modules/faq.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LinkButton from '../components/LinkButton';
import Accordion from '../components/Accordion';
import useFetch from '../hooks/useFetch';
import { IAccordion } from '../types/IAccordion';

const Faq = () => {
    const {data , loading, error} = useFetch<IAccordion[] | null>('faq');

  return (
    <section className={styles.faq}>
        <h2 className={styles.faqHeading}>Any questions? Check out the FAQs</h2>
        <p className={styles.faqDescription}>Still have unanswered questions and need to get in touch?</p>
        <div className={styles.contact}>
            <div className={styles.contactCard}>
                <img loading="lazy" src="/phone-icon.svg" alt="phone icon"/>
                <p>Still have  questions?</p>
                <div>
                    <a className={styles.contactPhone} href="tel:+1234567890">Contact us</a>
                    <FontAwesomeIcon className={styles.contactPhoneArrow} icon={faArrowRight}/>
                </div>
            </div>
            <div className={styles.contactCard}>
                <img loading="lazy" src="/sms-icon.svg" alt="sms icon"/>
                <p>Still have  questions?</p>
                <div>
                    <a className={styles.contactSms} href="sms:+1234567890">Contact us</a>
                    <FontAwesomeIcon className={styles.contactPhoneArrow} icon={faArrowRight}/>
                </div>
            </div>
            <LinkButton link='tel:+1234567890' color='brand' size='large' className={styles.contactBtnMobile}>
                Contact Us Now
            </LinkButton>
        </div>
        {!error && 
            <div className={styles.accordions}>
            { loading && <p>loading questions and answers...</p>}
            { data && data.map((accordion: IAccordion) => (
                <Accordion 
                    key={accordion.id}
                    title={accordion.title}
                    content={accordion.content} id={''}/>
                ))
            }
            </div>
        } 
    </section>

  )
}

export default Faq