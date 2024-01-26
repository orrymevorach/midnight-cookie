import CookieTile from './cookie-tile';
import styles from './cookie-gallery.module.scss';

export default function CookieGallery({ title, cookies, columns }) {
  return (
    <div>
      <p className={styles.heading}>{title}</p>
      <div
        className={styles.cookieGallery}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {cookies.map(cookie => (
          <CookieTile key={cookie.title} cookieData={cookie} />
        ))}
      </div>
    </div>
  );
}
