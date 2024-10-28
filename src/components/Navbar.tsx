import styles from '../styles/modules/navbar.module.css';
import BurgerMenu from './BurgerMenu';
import ThemeSwitch from './ThemeSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LinkButton from './LinkButton';

const Navbar = () => {
  return (
    <>
        <header>
            <div className={styles.navWrapper}>
                <Link to="/" className={styles.logoLink}>
                    <img loading="lazy" src="logo-silicon.svg" alt="Silicon Logo"/>
                    <h1 className={styles.logoName}>Sillicon</h1>
                </Link>      
                <nav className={styles.links}>
                    <HashLink to="/#features" className={styles.navLink}>Features</HashLink>
                    <Link to="/contact" className={styles.navLink}>Contact</Link>
                </nav>     
                <ThemeSwitch/>
                <LinkButton internalLink='/' color='brand' size='medium' className={styles.signin}>
                    <FontAwesomeIcon icon={faUser}/> 
                    <span> Sign in / up</span>
                </LinkButton>
                <BurgerMenu/>
            </div>
        </header>
    </>
  )
}

export default Navbar