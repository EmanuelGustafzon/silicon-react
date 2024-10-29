import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/modules/burgerMenu.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const BurgerMenu = () => {
    const [ open, setOpen ] = useState(false);
  return (
    <>
        <button 
            className={styles.burgerMenu}
            onClick={() => setOpen((open) => open = !open)}>
            <FontAwesomeIcon id='burger-icon' icon={faBars} size="1x" />
        </button>
        <div>
        {open && 
            <nav onClick={() => setOpen((open) => open = !open)} id="main-menu" className={styles.links} aria-hidden={!open}>
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