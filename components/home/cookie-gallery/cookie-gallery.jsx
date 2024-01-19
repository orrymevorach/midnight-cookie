import CookieTile from './cookie-tile';
import styles from './cookie-gallery.module.scss';

export default function CookieGallery({ title, items }) {
  return (
    <div>
      <p className={styles.heading}>{title}</p>
      <div className={styles.cookieGallery}>
        {items.map(cookie => (
          <CookieTile key={cookie.title} cookieData={cookie} />
        ))}
      </div>
    </div>
  );
}
