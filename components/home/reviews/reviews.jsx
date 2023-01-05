import styles from './reviews.module.scss';
import Heading from 'components/shared/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from 'hooks';

const reviewData = [
  {
    name: 'Dave M.',
    review: 'Absolutely amazing! Delivered warm out of the oven! Delicious!',
  },
  {
    name: 'Rayshelle S.',
    review:
      'Absolutely amazing product with a TON of options. The customer service was phenomenal I would definitely recommend 10/10',
  },
  {
    name: 'R. M.',
    review:
      'Literally amazing. The perfect balance of sweetness, chewiness and moisture. 10/10 would buy again.',
  },
];

const StarIcon = () => (
  <FontAwesomeIcon icon={faStar} color="#ffcc00" className={styles.starIcon} />
);

const Review = ({ name, review }) => {
  return (
    <div className={styles.review} key={name}>
      <div className={styles.row}>
        <div className={styles.imageContainer}>
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
};

export default function Reviews() {
  const { isTablet, isMobile } = useWindowSize();
  const removeReviewsForScreenSize = reviewData => {
    if (isTablet) return reviewData.slice(1);
    if (isMobile) return reviewData.slice(2);
    return reviewData;
  };

  const reviews = removeReviewsForScreenSize(reviewData);

  return (
    <div className={styles.reviews}>
      <Heading text="What Our Customers Say" />
      <div className={styles.reviewsContainer}>
        {reviews.map(({ name, review }) => {
          return <Review name={name} review={review} key={name} />;
        })}
      </div>
    </div>
  );
}
