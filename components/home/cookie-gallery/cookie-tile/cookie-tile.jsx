import Button from 'components/shared/button/button';
import styles from './cookie-tile.module.scss';
import { useWindowSize } from 'hooks';
import { useState } from 'react';

export default function CookieTile({
  cookieData: {
    title,
    image: { url },
    description,
  },
}) {
  const { isMobile } = useWindowSize();
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      className={styles.container}
      onMouseOver={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <div
        className={styles.cookieTile}
        style={{ backgroundImage: `url(${url})` }}
      >
        {description && showDescription && (
          <div className={styles.description}>{description}</div>
        )}
      </div>
      <div className={styles.textContainer}>
        {title.split(' ').map((word, index) => (
          <p key={`${word}-${index}`} className={styles.title}>
            <span>{word}</span>
            <br />
          </p>
        ))}
      </div>
    </div>
  );
}
