import Image from 'next/image';
import styles from './cookie-tile-v2.module.scss';

export default function CookieTile({
  cookieData: {
    title,
    image: { url, width, height },
  },
}) {
  return (
    <div>
      <div className={styles.cookieTile}>
        <Image
          src={url}
          width={width}
          height={height}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          {title.split(' ').map((word, index) => (
            <p key={`${word}-${index}`}>
              <span>{word}</span>
              <br />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
