import CookieTile from './cookie-tile';
import styles from './cookie-gallery.module.scss';
import Heading from 'components/shared/heading';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import animations from 'mevo-components/animations/animations.module.scss';

export default function CookieGallery({ cookieData, isPreview = false }) {
  const Wrapper = ({ children }) => {
    if (isPreview) return <>{children}</>; // Dont animate on preview mode, if you dont scroll to component it never shows up
    return (
      <AnimationOnScroll animateIn={animations.fadeUp}>
        {children}
      </AnimationOnScroll>
    );
  };
  return (
    <Wrapper>
      <Heading text="Available Flavours" />
      <div className={styles.cookieGallery}>
        {cookieData.map(cookie => (
          <CookieTile key={cookie.title} cookieData={cookie} />
        ))}
      </div>
    </Wrapper>
  );
}
