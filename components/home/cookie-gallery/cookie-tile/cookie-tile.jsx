import Button from 'components/shared/button/button';
import styles from './cookie-tile.module.scss';
import { htmlRegex } from 'utils/utils';
import { useWindowSize } from 'hooks';

export default function CookieTile({
  cookieData: {
    title,
    image: { url },
  },
}) {
  const { isMobile } = useWindowSize();
  return (
    <div className={styles.container}>
      <div
        className={styles.cookieTile}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className={styles.textContainer}>
        {title.split(' ').map((word, index) => (
          <p key={`${word}-${index}`} className={styles.title}>
            <span>{word}</span>
            <br />
          </p>
        ))}
        {isMobile && (
          <Button classNames={styles.button}>See All Flavours</Button>
        )}
      </div>
    </div>
  );
}
