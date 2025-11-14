import styles from './news-banner.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import cookiePieceRight from 'public/rebuild/cookie-piece.png';
import cookiePieceLeft from 'public/rebuild/cookie-piece-2.png';
import blogTO from '/public/rebuild/blogto-black.png';
import tasteToronto from '/public/rebuild/taste-toronto.png';
import streets from 'public/rebuild/streets-2.png';
import { useRef } from 'react';
import useAnimation from 'components/shared/animation/useAnimation';

export default function NewsBanner() {
  const ref = useRef();
  useAnimation({ ref });
  return (
    <div className={styles.container} ref={ref}>
      <Image
        src={cookiePieceLeft}
        className={clsx(styles.cookiePiece, styles.cookieLeft)}
        alt="Cookie piece left"
      />
      <Image
        src={cookiePieceRight}
        className={clsx(styles.cookiePiece, styles.cookieRight)}
        alt="Cookie piece right"
      />
      <p className={styles.heading}>As seen in</p>
      <div className={styles.row}>
        <a
          href="https://www.blogto.com/bakery/midnight-cookie-toronto/"
          className={styles.blogContainer}
        >
          <Image
            src={blogTO}
            alt="BlogTO Logo"
            className={clsx(styles.image, styles.blog)}
          />
        </a>
        <a href="https://www.tastetoronto.com/stories/midnight-cookie-is-set-to-open-first-storefront-in-midtown">
          <Image
            src={tasteToronto}
            alt="Taste Toronto Logo"
            className={clsx(styles.image, styles.taste)}
          />
        </a>
      </div>
      <a href="https://streetsoftoronto.com/torontos-midnight-cookie-takes-a-bite-out-of-midtown/">
        <Image
          src={streets}
          alt="Streets of Toronto Logo"
          className={clsx(styles.image, styles.streets)}
        />
      </a>
    </div>
  );
}
