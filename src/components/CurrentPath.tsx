import styles from '../styles/modules/currentPath.module.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const CurrentPath = () => {
  const location = useLocation();
  if(location.pathname == '/') return
  const currentPath = location.pathname.substring(1)

  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={faHome}/>
      <Link className={styles.link} to='/'>Homepage {` >`}</Link> 
      <span>{`${currentPath.charAt(0).toUpperCase()}${currentPath.slice(1)}`}</span>
    </div>
  )
}

export default CurrentPath