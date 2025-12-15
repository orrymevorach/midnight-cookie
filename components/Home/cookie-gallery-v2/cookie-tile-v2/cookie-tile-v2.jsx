import { useWindowSize } from 'hooks';
import styles from './cookie-tile-v2.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { getMedia } from 'lib/contentful';

export default function CookieTile({
  cookieData: { title, image, description },
}) {
  const { isMobile } = useWindowSize();
  const [showDescription, setShowDescription] = useState(false);
  const imageData = getMedia(image);
  return (
    <div
      className={styles.container}
      onMouseOver={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      {description && showDescription && (
        <div className={styles.description}>{description}</div>
      )}
      <div className={styles.cookieTile}>
        <Image
          src={imageData.src}
          className={styles.image}
          alt={`${title} cookie`}
          width={!isMobile && imageData.width}
          height={!isMobile && imageData.height}
          fill={isMobile}
        />
      </div>
      <div>
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
