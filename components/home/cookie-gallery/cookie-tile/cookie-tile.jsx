import styles from './cookie-tile.module.scss';
import { htmlRegex } from 'utils/utils';

export default function CookieTile({
  cookieData: {
    title,
    image: { url },
  },
}) {
  return (
    <div>
      <div
        className={styles.cookieTile}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}
