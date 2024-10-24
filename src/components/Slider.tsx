import LinkButton from './LinkButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/modules/slider.module.css'
import { useState } from 'react'
import useCurrentDevice from '../hooks/useCurrentDevice'

const Slider = () => {
    const device = useCurrentDevice()

    const pictures = ['/slider-phone-1.svg', '/slider-phone-2.svg', '/slider-phone-3.svg']
    const [ slide, setSlide ] = useState(1);

    const slideLeft = () => {
        setSlide((prevSlide) => slide == 0 ? prevSlide = 2 : prevSlide - 1)
    }
    const slideright = () => {
        setSlide((prevSlide) => slide == 2 ? prevSlide = 0 : prevSlide + 1)
    }
  return (
    <>
    {device === 'mobile' &&
    <div className={styles.sliderImages}>
        <div 
        className={`
            ${styles.slide} 
            `}>
            <img loading="lazy" src={pictures[slide]} alt="Sillicon app my budget"/>
        </div>
        
    </div>
    }
    {device === 'desktop' || device == 'tablet' &&
    <div className={styles.sliderImages}>
        <div className={`
            ${styles.slide} 
            `}>
            <img loading="lazy" className="leftImage" src={pictures[(slide - 1 + 3)% 3]} alt="Sillicon app my budget"/>
        </div>
        <div className={`
            ${styles.slide} 
            `}>
            <img loading="lazy" src={pictures[slide]} alt="Sillicon app my budget"/>
        </div>
        <div className={`
            ${styles.slide} 
            `}>
            <img loading="lazy" className="rightImage" src={pictures[(slide + 1) % 3]} alt="Sillicon app my budget"/>
        </div>
    </div>
    }
    <h3 className={styles.heading}>Latest Transaction History</h3>
    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
    <LinkButton color='primary' clickEvent={slideLeft} form='round' className={styles.prevBtn}>
        <FontAwesomeIcon icon={faChevronLeft}/>
    </LinkButton>
    <LinkButton color='primary' clickEvent={slideright} form='round' className={styles.nextBtn}>
        <FontAwesomeIcon icon={faChevronRight}/>
    </LinkButton>
    </>
  )
}

export default Slider