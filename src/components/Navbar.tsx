import styles from '../styles/component-styles/navbar.module.css';
import BurgerMenu from './BurgerMenu';
import ThemeSwitch from './ThemeSwitch';


const Navbar = () => {

  return (
    <>
    <header>
        <div className={styles.navWrapper}>
            <a href="index.html" className={styles.logoLink}>
                <img loading="lazy" src="logo-silicon.svg" alt="Silicon Logo"/>
                <h1 className={styles.logoName}>Sillicon</h1>
            </a>           
            <ThemeSwitch/>
            <BurgerMenu/>   
        </div>
    </header>
    </>
  )
}

export default Navbar