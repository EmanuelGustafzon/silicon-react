import styles from '../styles/modules/subscribe.module.css';
import btnStyles from '../styles/modules/button.module.css';
import 'font-awesome/css/font-awesome.min.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import useSendData from '../hooks/useSendData';
import formValidator from '../services/formValidator';

const Subscribe = () => {
    const [ formData, setFormData ] = useState({email: ''});
    const {makeRequest, response, error, loading} = useSendData('subscribe');
    const [inputError, setInputError] = useState({email: ''})

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData(prevData => (
           {
            ...prevData,
            email: e.target.value
           } 
        ))
    }
    const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValidEmail = formValidator.checkEmail(formData.email);
        if(!isValidEmail) {
            setInputError(prev => ({
                    ...prev,
                    email: 'Please, enter a valid email.'
                }))
            return
        }
        setInputError(prev => ({
            ...prev,
            email: ''
        }))

        makeRequest(formData)
        setFormData(prev => ({...prev, email: ''}))
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
                    <form noValidate onSubmit={handleSubscribe}>   
                        <input onChange={handleChange} name='email' value={formData.email} type='email' required placeholder="&#xf003;  Your Email" style={{fontFamily: 'Manrope, Helvetica, sans-serif, FontAwesome'}}/>
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
                        {(inputError.email !== '') && <p> {inputError.email} </p>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe