import styles from '../styles/modules/button.module.css';
import useTheme from '../hooks/useTheme';
import { ReactNode } from 'react';

interface LinkButtonProps {
    children: ReactNode;
    link?: string;
    clickEvent?: () => void;
    color: 'white' | 'brand' | 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    form?: 'round' | 'square';
    className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, link, clickEvent, color, size, form, className}) => {
    const { theme } = useTheme();

    if(link && clickEvent) {
        console.log('Not possible to have a click event and a link, choose one')
        return
    }

    const colors = {
        white: theme === 'dark' ? styles.darkWhite : styles.white,
        primary: theme === 'dark' ? styles.darkPrimary : styles.primary,
        secondary: theme === 'dark' ? styles.darkSecondary : styles.secondary,
        brand: styles.brand
    }

    const choosedColor = colors[color];
    const choosedForm = form === 'round' ? styles.arrow : '';
    const choosedSize = size && styles[size];

  return (
    <>
    { link && 
        <a href={link} className={`${styles.btn} ${choosedColor} ${choosedForm} ${choosedSize} ${className && className}`}>
            { children }
        </a> 
    }
    { clickEvent &&
        <button onClick={clickEvent} className={`${styles.btn} ${choosedColor} ${choosedForm} ${choosedSize} ${className && className}`}>
            { children }
        </button>
    }
    </>
  )
}

export default LinkButton