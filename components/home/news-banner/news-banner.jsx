import styles from './news-banner.module.scss';
import Heading from 'components/shared/heading';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import animations from 'mevo-components/animations/animations.module.scss';

export default function NewsBanner() {
  return (
    <AnimationOnScroll animateIn={animations.fadeUp}>
      <Heading text="As Seen On" />
      <div className={styles.row}>
        <Image
          src="/wp-content/uploads/2021/12/blogto.png"
          width={200}
          height={200}
          alt="BlogTO Logo"
        />
        <Image
          src="/wp-content/uploads/2022/12/tastetoronto.jpeg"
          width={200}
          height={200}
          alt="Taste Toronto Logo"
        />
        <Image
          src="/wp-content/uploads/2022/12/star.png"
          width={200}
          height={200}
          alt="Toronto Star Logo"
        />
      </div>
      <div className={styles.row}>
        <Image
          src="/wp-content/uploads/2021/08/daily-hive.jpeg"
          width={200}
          height={200}
          alt="Daily Hive Logo"
        />
        <Image
          src="/wp-content/uploads/2022/12/streets.png"
          width={200}
          height={200}
          alt="Streets Logo"
        />
      </div>
    </AnimationOnScroll>
  );
}
