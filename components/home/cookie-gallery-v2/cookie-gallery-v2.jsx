import CookieTile from './cookie-tile-v2';
import styles from './cookie-gallery-v2.module.scss';
import { useRef } from 'react';
import useAnimation from 'components/shared/animation/useAnimation';

export default function CookieGalleryV2({ title, cookies, columns }) {
  const ref = useRef();
  useAnimation({ ref });
  return (
    <div ref={ref}>
      <p className={styles.heading}>{title}</p>
      <div
        className={styles.cookieGallery}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {cookies.map((cookie, index) => (
          <CookieTile key={`${cookie.title}-${index}`} cookieData={cookie} />
        ))}
      </div>
    </div>
  );
}
