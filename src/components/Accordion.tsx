import styles from '../styles/modules/accordion.module.css'
import LinkButton from './LinkButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { IAccordion } from '../types/IAccordion';

const Accordion: React.FC<IAccordion> = ({ title, content }) => {
    const [open, setOpen] = useState(false)

    const openAccordion = () => setOpen((prevState) => ! prevState);

  return (
    <div className={styles.accordion}>
        <div className={styles.questionWrapper}>
        <h3 className={styles.question}>{title}</h3>
            <LinkButton form='round' color={open ? 'brand' : 'secondary'} clickEvent={openAccordion} className={styles.accordionBtn}>
                <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} className={`${styles.arrow} ${styles.arrowTransition}`}/>
            </LinkButton>
        </div>
        {open && 
            <div className={styles.answer}>
                <p>{content}</p>
            </div>
        }
    </div>
  )
}

export default Accordion