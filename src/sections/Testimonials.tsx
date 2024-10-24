import styles from '../styles/modules/testimonialsSection.module.css'
import useFetch from '../hooks/useFetch'
import { ITestimonial } from '../types/ITestimonial'
import Testimonial from '../components/Testimonial'

const Testimonials = () => {
    const {data , loading, error} = useFetch<ITestimonial[] | null>('testimonials') 

    if(error) {
        console.log(error)
        return
    }
    return (
        <section className={styles.testamonials}>
            <div className={styles.testamonialsWrapper}>
                <h2 className={styles.testamonialsHeading}>
                    Clients are Loving Our App
                </h2>
                { loading && <p>loading testimonials...</p>}
                { data && data.map((testamonial: ITestimonial) => (
                    <Testimonial 
                        key={testamonial.id} 
                        author={testamonial.author} 
                        jobRole={testamonial.jobRole} 
                        starRating={testamonial.starRating} 
                        avatarUrl={testamonial.avatarUrl} 
                        comment={testamonial.comment} id={''}/>
                    ))
                }   
            </div>
        </section>
    );
}

export default Testimonials