import CookieTile from './cookie-tile';
import styles from './cookie-gallery.module.scss';
import Heading from 'components/heading';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import animations from '@animations';

export default function CookieGallery({ cookieData }) {
  return (
    <AnimationOnScroll animateIn={animations.fadeUp}>
      <Heading text="Available Flavours" />
      <div className={styles.cookieGallery}>
        {cookieData.map(cookie => (
          <CookieTile key={cookie.title} cookieData={cookie} />
        ))}
      </div>
    </AnimationOnScroll>
  );
}
