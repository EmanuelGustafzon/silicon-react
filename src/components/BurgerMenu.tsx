import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/modules/burgerMenu.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
            <nav onClick={() => setHidden((open) => open = !open)} id="main-menu" className={styles.links} aria-hidden={!hidden}>
                <HashLink smooth to="/#features">Features</HashLink>
                <Link to="/contact">Contact</Link>
                <Link to="/"  id="login-mobile">Sign in / up</Link>
            </nav>
        }
        </div>
    </>
  )
}

export default BurgerMenu