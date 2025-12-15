import CookieTile from './cookie-tile-v2';
import styles from './cookie-gallery-v2.module.scss';
import { useRef } from 'react';
import useAnimation from 'components/shared/Animation/useAnimation';
import { useWindowSize } from 'hooks';
import MovementSlider from 'components/shared/MovementSlider/MovementSlider';
import Button from 'components/shared/Button/Button';

export default function CookieGalleryV2({ title, cookies, columns }) {
  const ref = useRef();
  useAnimation({ ref });
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
          {cookies.map((cookie, index) => (
            <CookieTile key={`${cookie.title}-${index}`} cookieData={cookie} />
          ))}
        </div>
      )}
      <div className={styles.buttonContainer}>
        <Button
          href="https://order.tapmango.com/merchant/dfb63169-3067-4b49-89f3-09deeb3eba9b/order/catalog"
          classNames={styles.button}
          hoverText="Eat Cookies"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
}
