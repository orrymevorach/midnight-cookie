import styles from './reviews.module.scss';
import Heading from 'components/shared/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from 'hooks';

const reviewData = [
  {
    name: 'Dave M.',
    src: 'https://www.midnightcookie.ca/wp-content/uploads/2021/10/unnamed-2.png',
    review: 'Absolutely amazing! Delivered warm out of the oven! Delicious!',
  },
  {
    name: 'Rayshelle S.',
    src: 'https://www.midnightcookie.ca/wp-content/uploads/2021/10/ray.png',
    review:
      'Absolutely amazing product with a TON of options. The customer service was phenomenal I would definitely recommend 10/10',
  },
  {
    name: 'R. M.',
    src: 'https://www.midnightcookie.ca/wp-content/uploads/2021/10/unnamed-1.png',
    review:
      'Literally amazing. The perfect balance of sweetness, chewiness and moisture. 10/10 would buy again.',
  },
];
export default function Reviews() {
  const StarIcon = () => (
    <FontAwesomeIcon
      icon={faStar}
      color="#ffcc00"
      className={styles.starIcon}
    />
  );
  const { isTablet, isMobile } = useWindowSize();
  const removeReviews = reviewData => {
    if (isTablet) return reviewData.slice(1);
    if (isMobile) return reviewData.slice(2);
    return reviewData;
  };

  return (
    <div className={styles.reviews}>
      <Heading text="What Our Customers Say" />
      <div className={styles.reviewsContainer}>
        {removeReviews(reviewData).map(({ name, src, review }) => {
          return (
            <div className={styles.review} key={name}>
              <div className={styles.row}>
                <div className={styles.imageContainer}>
                  <img src={src} alt="" />
                  <div className={styles.quoteIcon}>
                    <FontAwesomeIcon icon={faQuoteLeft} color="white" />
                  </div>
                </div>
                <p className={styles.name}>{name}</p>
                <div>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <p className={styles.reviewText}>"{review}"</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
