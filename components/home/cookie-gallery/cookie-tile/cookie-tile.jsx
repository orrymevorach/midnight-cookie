import styles from './cookie-tile.module.scss';
import { htmlRegex } from 'utils/utils';

export default function CookieTile({
  cookieData: {
    title,
    description,
    image: { url },
  },
}) {
  const formattedDescription = description.replace(htmlRegex, '');
  return (
    <div className={styles.cookieTile}>
      <img src={url} alt={title} />
      <p className={styles.title}>{title}</p>
      <p>{formattedDescription}</p>
    </div>
  );
}
