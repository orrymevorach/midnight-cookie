import { useWindowSize } from 'hooks';
import styles from './cookie-tile-v2.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function CookieTile({
  cookieData: {
    title,
    image: { url, width, height },
    description,
  },
}) {
  const { isMobile } = useWindowSize();
  const [showDescription, setShowDescription] = useState(false);
  const style = isMobile ? { backgroundImage: `url(${url})` } : {};
  return (
    <div
      className={styles.container}
      onMouseOver={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      {description && showDescription && (
        <div className={styles.description}>{description}</div>
      )}
      <div className={styles.cookieTile} style={style}>
        {!isMobile && (
          <Image
            src={url}
            width={width}
            height={height}
            className={styles.image}
            alt=""
          />
        )}
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
