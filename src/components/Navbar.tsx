import navStyles from '../styles/component-styles/navbar.module.css';
import buttonStyles from '../styles/component-styles/button.module.css';
import BurgerMenu from './BurgerMenu';
import ThemeSwitch from './ThemeSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  return (
    <>
    <header>
        <div className={navStyles.navWrapper}>
            <a href="index.html" className={navStyles.logoLink}>
                <img loading="lazy" src="logo-silicon.svg" alt="Silicon Logo"/>
                <h1 className={navStyles.logoName}>Sillicon</h1>
            </a>      
            <nav className={navStyles.links}>
                <a href="#features" className={navStyles.navLink}>Features</a>
                <a href="#features" className={navStyles.navLink}>Contact</a>
            </nav>     
            <ThemeSwitch/>
            <a href="/" className={`${buttonStyles.btn} ${buttonStyles.brand} ${buttonStyles.medium} ${navStyles.signin}`}>
                <FontAwesomeIcon icon={faUser}/> 
                <span> Sign in / up</span>
            </a> 
            <BurgerMenu/>  
        </div>
    </header>
    </>
  )
}

export default Navbar