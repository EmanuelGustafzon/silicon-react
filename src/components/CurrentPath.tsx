import styles from '../styles/modules/currentPath.module.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const CurrentPath = () => {
  const location = useLocation();
  if(location.pathname == '/') return

  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={faHome}/>
      <Link className={styles.link} to='/'>Homepage {` >`}</Link> 
      <span>{location.pathname.substring(1)}</span>
    </div>
  )
}

export default CurrentPath