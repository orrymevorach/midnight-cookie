import CookieTile from './cookie-tile';
import styles from './cookie-gallery.module.scss';

export default function CookieGallery({ cookieData }) {
  return (
    <div>
      <h3 className={styles.galleryTitle}>Available Flavours</h3>
      <div className={styles.cookieGallery}>
        {cookieData.map(cookie => (
          <CookieTile key={cookie.title} cookieData={cookie} />
        ))}
      </div>
    </div>
  );
}
