import CookieTile from './cookie-tile';
import styles from './cookie-gallery.module.scss';
import Heading from '@components/heading/heading';

export default function CookieGallery({ cookieData }) {
  return (
    <div data-aos="fade-up">
      <Heading text="Available Flavours" />
      <div className={styles.cookieGallery}>
        {cookieData.map(cookie => (
          <CookieTile key={cookie.title} cookieData={cookie} />
        ))}
      </div>
    </div>
  );
}
