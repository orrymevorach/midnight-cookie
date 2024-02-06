import CookieTile from './cookie-tile';
import styles from './cookie-gallery.module.scss';
import { useRef } from 'react';
import useAnimation from 'components/shared/animation/useAnimation';
import { useWindowSize } from 'hooks';
import MovementSlider from 'components/movement-slider';
import Button from 'components/shared/button/button';

export default function CookieGallery({ title, cookies, columns }) {
  const ref = useRef();
  useAnimation({ ref, animateOnMobile: false });
  const { isMobile } = useWindowSize();
  return (
    <div ref={ref}>
      <p className={styles.heading}>{title}</p>
      {isMobile ? (
        <MovementSlider data={cookies} hasDots={false}>
          {cookies.map(cookie => (
            <CookieTile key={cookie.title} cookieData={cookie} />
          ))}
        </MovementSlider>
      ) : (
        <div
          className={styles.cookieGallery}
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {cookies.map(cookie => (
            <CookieTile key={cookie.title} cookieData={cookie} />
          ))}
        </div>
      )}
      {!isMobile && (
        <Button classNames={styles.button}>See All Flavours</Button>
      )}
    </div>
  );
}
