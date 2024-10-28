import styles from '../styles/modules/subscribe.module.css';
import btnStyles from '../styles/modules/button.module.css';
import 'font-awesome/css/font-awesome.min.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import useSendData from '../hooks/useSendData';
import formValidator from '../services/formValidator';

const Subscribe = () => {
    const [ data, setData ] = useState({email: ''});
    const {send, response, error, loading} = useSendData('subscribe');
    const [inputError, setInputError] = useState({email: false})

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setData(prevData => (
           {
            ...prevData,
            email: e.target.value
           } 
        ))
    }

    const subscribeAction = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValidEmail = formValidator.checkEmail(data.email);
        if(!isValidEmail) {
            setInputError(prev => ({
                    ...prev,
                    email: true
                }))
            return
        }
        setInputError(prev => ({
            ...prev,
            email: false
        }))
        await send(data)
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
                <div>
                    <form onSubmit={subscribeAction}>   
                        <input onChange={handleChange} name='email' type='email' required placeholder="&#xf003;  Your Email" style={{fontFamily: 'Manrope, Helvetica, sans-serif, FontAwesome'}}/>
                        <button disabled={loading} type='submit' className={`${btnStyles.brand} ${styles.subscribeBtn}`}>Subscribe</button>
                    </form>
                    <div className={`
                            ${styles.formFeedback} 
                            ${(response && response.status === 200) && styles.success}
                            ${error && styles.error} 
                            ${inputError.email && styles.error} 
                            `}>
                        {error && <p>Sorry we are having some problems, please try again.</p>}
                        {(response && response.status === 200) && <p>Thank you for subscribing!</p>}
                        {(inputError.email === true) && <p>Please, enter a valid email.</p>}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Subscribe