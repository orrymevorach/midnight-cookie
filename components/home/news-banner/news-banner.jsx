import styles from './news-banner.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import cookiePieceRight from 'public/rebuild/cookie-piece.png';
import cookiePieceLeft from 'public/rebuild/cookie-piece-2.png';
import blogTO from '/public/rebuild/blogto-black.png';
import tasteToronto from '/public/rebuild/taste-toronto.png';
import torontoStar from 'public/rebuild/star-black.png';
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
      />
      <Image
        src={cookiePieceRight}
        className={clsx(styles.cookiePiece, styles.cookieRight)}
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
        <a href="https://www.tastetoronto.com/news/midnight-cookie-is-set-to-open-first-storefront-in-midtown">
          <Image
            src={tasteToronto}
            alt="Taste Toronto Logo"
            className={clsx(styles.image, styles.taste)}
          />
        </a>
      </div>
      <a href="#">
        <Image
          src={torontoStar}
          alt="Toronto Star Logo"
          className={clsx(styles.image, styles.star)}
        />
      </a>
    </div>
  );
}
