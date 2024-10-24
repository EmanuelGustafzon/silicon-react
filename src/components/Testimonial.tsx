import styles from '../styles/modules/testimonialsSection.module.css'
import { ITestimonial } from '../types/ITestimonial';

const Testimonial: React.FC<ITestimonial> = ({ author, jobRole, starRating, avatarUrl, comment }) => {
    const getRating = (rating: number) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} loading="lazy" src="/star.svg" alt="star"/>);
        }
        return stars;
      };
    return (
        <>
        <div className={styles.testamonialsCard}>
                <div className={styles.citatImg}>
                    <img loading="lazy" src="/quotes.svg" alt="quotes"/>
                </div>
                <div className={styles.stars}>
                    {getRating(starRating)}
                </div>
                <p className={styles.testamonialsContent}>
                    { comment }
                </p>
                <div className={styles.testamonialsPerson}>
                    <img loading="lazy" src={avatarUrl} alt={`image of ${author}`}/>
                    <div className={styles.nameAndTitle}>
                        <p className={styles.name}>{author}</p>
                        <p className={styles.title}>{jobRole}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial