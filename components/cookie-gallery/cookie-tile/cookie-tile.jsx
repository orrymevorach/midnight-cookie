import styles from './cookie-tile.module.scss';
import { htmlRegex } from '@utils';

export default function CookieTile({
  cookieData: { featuredImage, content, title },
}) {
  const imgSrc = featuredImage?.node?.mediaItemUrl;
  const description = content.replace(htmlRegex, '');
  return (
    <div className={styles.cookieTile}>
      <img src={imgSrc} alt={title} />
      <p className={styles.title}>{title}</p>
      <p>{description}</p>
    </div>
  );
}
