import styles from '../styles/modules/icon.module.css';

const Icon = ({ iconSrc, altText }: {iconSrc: string, altText: string}) => {
  return (
    <>
      <img loading="lazy" className={styles.iconBackground} src={iconSrc} alt={altText}/>
    </>
  )
}

export default Icon