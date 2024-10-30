import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import styles from '../styles/modules/contactSection.module.css'

const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
          <div>
            <h1 className={styles.heading}>Contact Us</h1>
            <div className={styles.contactCardWrapper}>
              <div className={styles.contactCard}>
                <Icon iconSrc='/envelope-icon.svg' altText='envelop '/>
                <div className={styles.cardContent}>
                  <div>
                    <h3>Email us</h3>
                    <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                  </div>
                  <div>
                    <a href='mailto:fake@fake.com '>
                      {`leave us a message ->`}
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.contactCard}>
                <Icon iconSrc='/connect-icon.svg' altText='envelop '/>
                <div className={styles.cardContent}>
                  <div>
                    <h3>Careers</h3>
                    <p>Please free to reach out to us if you are looking for a new job opportunnity.</p>
                  </div>
                  <div>
                    <a href='mailto:carrers@fake.com '>
                      {`leave us a message ->`}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm parentClassName={styles.contactForm}/>
          </div>
        </div>
    </section>
  )
}

export default ContactSection