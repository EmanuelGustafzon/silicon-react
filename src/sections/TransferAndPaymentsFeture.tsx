import Icon from '../components/Icon';
import LinkButton from '../components/LinkButton';
import styles from '../styles/modules/tranferAndPaymentsFeature.module.css';
import useCurrentDevice from '../hooks/useCurrentDevice';
const TransferAndPaymentsFeture = () => {
    const device = useCurrentDevice();
    if(device !== 'desktop') return;

  return (
    <section className={styles.featureTranfersAndPayments}>
            <div className={styles.transfers}>
                <div className={styles.transfersInformation}>
                    <h2>Make your money transfer simple and clear</h2>
                    <ul>
                        <li><img loading="lazy" src="/check-circle-icon.svg" alt="checkbox"/><span>Banking transactions are free for you</span></li>
                        <li><img loading="lazy" src="/check-circle-icon.svg" alt="checkbox"/><span>No monthly cash commission</span></li>
                        <li><img loading="lazy" src="/check-circle-icon.svg" alt="checkbox"/><span>Manage payments and transactions online</span></li>
                    </ul>
                    <div className={styles.link}>
                        <LinkButton link='/' color='brand' size='medium'>
                            {`Learn more ->`}
                        </LinkButton> 
                    </div>
                </div>
                <div className={styles.transfersImages}>
                    <img loading="lazy" src="/transfer-money-bottom.svg" alt="simple transfer with sillicon app"/>
                    <img loading="lazy" className={styles.transferMoneyTop} src="/transfer-money-top.svg" alt="icons of people you can add and send to"/>
                </div>
            </div>
            <div className={styles.internationalPayments}>
                <div className={styles.paymentsImage}>
                    <img src="/recieve-payment.svg" alt="simple international payments with sillicon app"/>
                </div>
                <div className={styles.paymentsInformation}>
                    <h2>Receive payment from international bank details</h2>
                    <div className={styles.paymentsGrid}>
                        <div>
                            <Icon iconSrc='/credit-card-icon.svg' altText='credit card'/>
                            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </div>
                        <div>
                            <Icon iconSrc='/wallet-icon.svg' altText='wallet'/>
                            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </div>
                    </div>
                    <div className={styles.link}>
                        <LinkButton link='/' color='brand' size='medium'>
                            {`Learn more ->`}
                        </LinkButton> 
                    </div>
                </div>
            </div>
        </section>
  )
}

export default TransferAndPaymentsFeture