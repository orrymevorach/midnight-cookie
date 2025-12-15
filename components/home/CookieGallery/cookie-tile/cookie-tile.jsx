import styles from './cookie-tile.module.scss';
import { useWindowSize } from 'hooks';
import { useState } from 'react';
import { getMedia } from 'lib/contentful';

export default function CookieTile({
  cookieData: { title, image, description },
}) {
  const [showDescription, setShowDescription] = useState(false);
  const imageData = getMedia(image);

  return (
    <div
      className={styles.container}
      onMouseOver={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <div
        className={styles.cookieTile}
        style={{ backgroundImage: `url(${imageData.src})` }}
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
