import styles from '../styles/modules/companyLogos.module.css';
import useCurrentDevice from '../hooks/useCurrentDevice';

const CompanyLogos = () => {
    const device = useCurrentDevice();

    return (
    <div className={styles.companyLogos}>
        <div className={styles.companyLogo}>
            <img loading="lazy" src='logoipsum-1.svg' alt="Logo of company" />
        </div> 
        <div className={styles.companyLogo}>
            <img loading="lazy" src='logoipsum-2.svg' alt="Logo of company" />
        </div>
        <div className={styles.companyLogo}>
            <img loading="lazy" src='logoipsum-3.svg' alt="Logo of company" />
        </div>
        <div className={styles.companyLogo}>
            <img loading="lazy" src='logoipsum-4.svg' alt="Logo of company" />
        </div>
        { device === 'desktop' && 
        <>
        <div className={styles.companyLogo}>
            <img loading="lazy" src='logoipsum-5.svg' alt="Logo of company" />
        </div>
        <div className={styles.companyLogo}>
            <img loading="lazy" src='logoipsum-6.svg' alt="Logo of company" />
        </div>
        </>
        }
    </div>
  )
}

export default CompanyLogos