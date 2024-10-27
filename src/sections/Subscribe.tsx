import styles from '../styles/modules/subscribe.module.css';
import btnStyles from '../styles/modules/button.module.css';
import 'font-awesome/css/font-awesome.min.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import useSendData from '../hooks/useSendData';

const Subscribe = () => {
    const [ data, setData ] = useState('');
    const {send, response} = useSendData('subscribe');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setData(e.target.value)
    }

    const subscribeAction = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await send({email: data})
        console.log(response)
    }

  return (
    <section className={styles.subscribe}>
            <div className={styles.subscribeWrapper}>
                <div className={styles.bellTextWrapper}>
                    <img loading="lazy" className={styles.bellImg} src="/notification.svg" alt="notification icon / bell"/>
                    <div className={styles.subscribeTextWrapper}>
                        <h2 className={styles.subscribeText1}>Subscribe to our newsletter</h2>
                        <span className={styles.subscribeText2}>to stay informed about latest updates</span>
                    </div>
                </div>
                <form onSubmit={subscribeAction}>   
                    <input onChange={handleChange} name='email' type='email' required placeholder="&#xf003;  Your Email" style={{fontFamily: 'Manrope, Helvetica, sans-serif, FontAwesome'}}/>
                    <button type='submit' className={`${btnStyles.brand} ${styles.subscribeBtn}`}>Subscribe</button>
                </form>
            </div>
        </section>
  )
}

export default Subscribe