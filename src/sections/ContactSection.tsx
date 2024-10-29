import ContactForm from '../components/ContactForm'
import styles from '../styles/modules/contactSection.module.css'

const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div>
            <h2>Contact</h2>
        </div>
        <div>
            <ContactForm parentClassName={styles.contactForm}/>
        </div>
      </div>
    </section>
  )
}

export default ContactSection