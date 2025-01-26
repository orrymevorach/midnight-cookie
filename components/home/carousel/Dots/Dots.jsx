import styles from './Dots.module.scss';
import clsx from 'clsx';

export default function MediaItems({ media, currentIndex, setCurrentIndex }) {
  return (
    <div className={styles.dotsContainer}>
      {media.items.map((item, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={`row-${item.title}-${index}`}
            className={clsx(styles.dot, isActive && styles.active)}
            onClick={() => setCurrentIndex(index)}
          />
        );
      })}
    </div>
  );
}
