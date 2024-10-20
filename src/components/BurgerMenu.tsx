import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/component-styles/burgerMenu.module.css';
import { useState } from 'react';

const BurgerMenu = () => {
    const [ hidden, setHidden ] = useState(false);
  return (
    <>
        <button 
            aria-expanded={hidden} 
            aria-controls="main-menu" 
            className={styles.burgerMenu}
            onClick={() => setHidden((open) => open = !open)}>
            <FontAwesomeIcon id='burger-icon' icon={faBars} size="1x" />
        </button>
        <div>
        {hidden && 
            <nav id="main-menu" className={styles.links} aria-hidden={!hidden}>
                <a href="#features">Features</a>
                <a href="#"  id="login-mobile">Sign in / up</a>
            </nav>
        }
        </div>
    </>
  )
}

export default BurgerMenu