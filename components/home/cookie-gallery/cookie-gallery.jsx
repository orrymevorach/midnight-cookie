import CookieTile from './cookie-tile';
import styles from './cookie-gallery.module.scss';
import { useRef } from 'react';
import useAnimation from 'components/shared/animation/useAnimation';

export default function CookieGallery({ title, cookies, columns }) {
  const ref = useRef();
  useAnimation({ ref });
  return (
    <div ref={ref}>
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
