import styles from '../styles/modules/feature.module.css';
import Icon from './Icon';

interface featureProps {
  iconSrc: string;
  iconAltText: string;
  heading: string;
  content: string;
}

const Feature: React.FC<featureProps> = ({iconSrc, iconAltText, heading, content}) => {
  return (
    <div className={styles.featuresCard}>
      <Icon iconSrc={iconSrc} altText={iconAltText}/>
      <div>
          <h3>{heading}</h3>
          <p>{content}</p>
      </div>
    </div>   
  )
}

export default Feature