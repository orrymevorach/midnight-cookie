import styles from './image-gallery.module.scss';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import animations from 'mevo-components/animations/animations.module.scss';

export default function ImageGallery() {
  return (
    <div className={styles.imageContainer}>
      <Image
        width="240"
        height="375"
        src="https://www.midnightcookie.ca/wp-content/uploads/2021/10/mid-1.jpg"
        className={animations.fadeUp}
        alt=""
      />
      <div className={styles.rightColumn}>
        <Image
          width="340"
          height="210"
          src="https://www.midnightcookie.ca/wp-content/uploads/2021/10/mid2.jpg"
          className={animations.fadeUp}
          alt=""
        />
        <AnimationOnScroll animateIn={animations.fadeUp}>
          <Image
            width="340"
            height="335"
            src="https://www.midnightcookie.ca/wp-content/uploads/2022/10/MidnightCookie_Hero.jpg"
            alt=""
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
}