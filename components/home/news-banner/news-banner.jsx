import styles from './news-banner.module.scss';
import Heading from 'components/shared/heading';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import animations from 'mevo-components/animations/animations.module.scss';
import Link from 'next/link';

export default function NewsBanner() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>As seen in</p>
      <div className={styles.row}>
        <a href="https://www.blogto.com/bakery/midnight-cookie-toronto/">
          <Image
            src="/wp-content/uploads/2021/12/blogto.png"
            width={200}
            height={200}
            alt="BlogTO Logo"
            className={styles.image}
          />
        </a>
        <a href="https://www.tastetoronto.com/news/midnight-cookie-is-set-to-open-first-storefront-in-midtown">
          <Image
            src="/rebuild/taste-toronto.png"
            width={200}
            height={200}
            alt="Taste Toronto Logo"
            className={styles.image}
          />
        </a>
      </div>
      <a href="#">
        <Image
          src="/wp-content/uploads/2022/12/star.png"
          width={200}
          height={200}
          alt="Toronto Star Logo"
          className={styles.image}
        />
      </a>
    </div>
  );
}
