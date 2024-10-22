import styles from '../styles/modules/companyLogos.module.css';
import useCurrentDevice from '../hooks/useCurrentDevice';

const CompanyLogos = () => {
    const device = useCurrentDevice();
    if(device === 'mobile') return

    const logos: string[] =['logoipsum-1.svg', 'logoipsum-2.svg', 'logoipsum-3.svg', 'logoipsum-4.svg', 'logoipsum-5.svg', 'logoipsum-6.svg'];
    if(device === 'tablet') logos.splice(4, 2);

    return (
    <div className={styles.companyLogos}>
        {logos.map( (link, index) => {
            return (
                <CompanyLogo key={index} imgSrc={link} /> )
            })}
    </div>
  )
}

const CompanyLogo= ({ imgSrc }: { imgSrc: string }) => {
    return (
        <div className={styles.companyLogo}>
            <img loading="lazy" src={imgSrc} alt="Logo of company" />
        </div>  
    )
}

export default CompanyLogos