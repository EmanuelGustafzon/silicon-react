import LinkButton from './LinkButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/modules/slider.module.css'
import { useState } from 'react'
import useCurrentDevice from '../hooks/useCurrentDevice'

const Slider = () => {
    const device = useCurrentDevice()

    const pictures = ['/slider-phone-1.svg', '/slider-phone-2.svg', '/slider-phone-3.svg']
    const headings = ['Latest Transaction History','Transfers to People From Your Contact List','Keep Track Of Your Budget']
    const [ slide, setSlide ] = useState<number>(1);
    const [ isSlidingOut, setIsSlidingOut ] = useState(false);
    const [ isSlidingIn, setIsSlidingIn ] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right')

    const slideLeft = async () => {
        setDirection('left')
        setIsSlidingOut(true)
        await new Promise((resolve) => setTimeout(resolve, 200));
        setIsSlidingOut(false)
        setSlide((prevSlide) => slide == 0 ? prevSlide = 2 : prevSlide - 1)
        setIsSlidingIn(true)
        await new Promise((resolve) => setTimeout(resolve, 200));
        setIsSlidingIn(false) 
    }
    const slideright = async () => {
        setDirection('right')
        setIsSlidingOut(true)
        await new Promise((resolve) => setTimeout(resolve, 200));
        setIsSlidingOut(false)
        setSlide((prevSlide) => slide == 2 ? prevSlide = 0 : prevSlide + 1)
        setIsSlidingIn(true)
        await new Promise((resolve) => setTimeout(resolve, 200));
        setIsSlidingIn(false)            
    }
  return (
    <>
        {device === 'mobile' &&
        <div className={styles.sliderImages}>
            <div 
            className={`
                ${styles.slide} 
                ${isSlidingOut && direction === 'right' && styles.slideOutLeft} 
                ${isSlidingIn && direction === 'right' && styles.slideInRight} 
                ${isSlidingOut && direction === 'left' && styles.slideOutRight} 
                ${isSlidingIn && direction === 'left' && styles.slideInLeft}
                `}>
                {slide === 0 && <img src={pictures[0]} className={styles.slideImage} alt={headings[slide]}/>}
                {slide === 1 && <img src={pictures[1]} className={styles.slideImage} alt={headings[slide]}/>}
                {slide === 2 && <img src={pictures[2]} className={styles.slideImage} alt={headings[slide]}/>} 
            </div>
        </div>
        }
        {device !== 'mobile' &&
        <div className={styles.sliderImages}>
            <div className={`
                ${styles.slide} 
                ${isSlidingOut && direction === 'right' && styles.slideOutLeft} 
                ${isSlidingIn && direction === 'right' && styles.slideInRight} 
                ${isSlidingOut && direction === 'left' && styles.slideOutRight} 
                ${isSlidingIn && direction === 'left' && styles.slideInLeft}
                `}>
                <img key={pictures[(slide - 2 + 3)% 3]} className={styles.slideImage} src={pictures[(slide - 2 + 3)% 3]} alt={headings[slide]}/>
            </div>
            <div className={`
                ${styles.slide} 
                ${styles.active} 
                ${isSlidingOut && direction === 'right' && styles.slideOutLeft} 
                ${isSlidingIn && direction === 'right' && styles.slideInRight} 
                ${isSlidingOut && direction === 'left' && styles.slideOutRight} 
                ${isSlidingIn && direction === 'left' && styles.slideInLeft}
                `}>
                <img key={pictures[slide]} className={styles.slideImage} src={pictures[slide]} alt={headings[slide]}/>
            </div>
            <div className={`
                ${styles.slide} 
                ${isSlidingOut && direction === 'left' && styles.slideOutLeft} 
                ${isSlidingIn && direction === 'left' && styles.slideInRight} 
                ${isSlidingOut && direction === 'right' && styles.slideOutRight} 
                ${isSlidingIn && direction === 'right' && styles.slideInLeft}
                `}>
                <img key={pictures[(slide + 2) % 3]} className={styles.slideImage} src={pictures[(slide + 2) % 3]} alt={headings[slide]}/>
            </div>
        </div>
        }
        <h3 className={styles.heading}>{headings[slide]}</h3>
        <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p> 
        <LinkButton disable={(isSlidingIn || isSlidingOut)} color='primary' clickEvent={slideLeft} form='round' className={styles.prevBtn}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </LinkButton>
        <LinkButton disable={(isSlidingIn || isSlidingOut)} color='primary' clickEvent={slideright} form='round' className={styles.nextBtn}>
            <FontAwesomeIcon icon={faChevronRight}/>
        </LinkButton>
    </>
  )
}

export default Slider