import styles from './image-gallery.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import animations from 'mevo-components/animations/animations.module.scss';

export default function ImageGallery() {
  return (
    <div className={styles.imageContainer}>
      <img
        width="240"
        height="375"
        src="/wp-content/uploads/2021/10/mid-1.jpg"
        className={animations.fadeUp}
        alt=""
      />
      <div className={styles.rightColumn}>
        <img
          width="340"
          height="210"
          src="/wp-content/uploads/2021/10/mid2.jpg"
          className={animations.fadeUp}
          alt=""
        />
        <AnimationOnScroll animateIn={animations.fadeUp}>
          <img
            width="340"
            height="335"
            src="/wp-content/uploads/2022/10/MidnightCookie_Hero.jpg"
            alt=""
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
}
