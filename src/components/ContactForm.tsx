import { ChangeEvent, FormEvent, useState } from "react"
import useSendData from "../hooks/useSendData";
import btnStyles from '../styles/modules/button.module.css'
import styles from '../styles/modules/contactForm.module.css'
import formValidator from "../services/formValidator";

type ISpecialist = 'Neurology' | 'Ophthalmic Surgery' | 'Pathology' | 'Hospital Medicine';

interface IContact {
    fullname: string;
    email: string;
    specialist: ISpecialist
}

const ContactForm = ({ parentClassName }: { parentClassName?: string }) => {

    const { makeRequest, error, loading, response } = useSendData('contact');
    const [formData, setFormData] = useState<IContact>({ fullname: '', email: '', specialist: 'Neurology'});
    const [inputError, setInputError] = useState({ fullname: '', email: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData(prevData => (
        {
          ...prevData,
          [e.target.name]: e.target.value
        }
      ))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const fullname = formData.fullname;
      const email = formData.email;
      const fullnameIsValid = formValidator.checkFullname(fullname);
      const emailIsValid = formValidator.checkEmail(email);
      if(!fullnameIsValid) {
        setInputError(prev => ({...prev, fullname: 'Provide your first and last name'}))
        return
      } else {
        setInputError(prev => ({...prev, fullname: ''}))
      }
      if(!emailIsValid) {
        setInputError(prev => ({...prev, email: 'provide a valid email'}))
        return
      } else {
        setInputError(prev => ({...prev, email: ''}))
      }

      makeRequest(formData)
    }

  return (
    <div className={`${styles.formWrapper} ${parentClassName && parentClassName}`}>
      <h2>Get Online Consoluting</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label> Full name
          <div>
            <input type="text" name="fullname" onChange={handleChange}/>
            { inputError.fullname !== '' &&  <p className={styles.error}>{inputError.fullname}</p>}
          </div>
        </label>
        <label> Email address
          <div>
            <input type="email" name="email" onChange={handleChange}/>
            { inputError.email !== '' && <p className={styles.error}>{inputError.email}</p> }
          </div>
        </label>
        <label> Specialist
          <div>
            <select name="specialist" onChange={handleChange}>
              <option value='Neurology'> Neurology </option>
              <option value='Ophthalmic Surgery'> Ophthalmic Surgery </option>
              <option value='Pathology'>Pathology</option>
              <option value='Hospital Medicine'>Hospital Medicine</option>
            </select>
          </div>
        </label>
        <button disabled={loading} type="submit" className={`${btnStyles.btn} ${btnStyles.brand} ${btnStyles.large}`}>
          Make an appointment
        </button>
        <div>
          { error && <p className={styles.error}>oops something went wrong... please try again.</p> }
          { (response && response.status === 200) &&<p className={styles.success}>Thank you for reaching out to us, we get back to you as soon as possible.</p> }
        </div>
      </form>
    </div>
  )
}

export default ContactForm