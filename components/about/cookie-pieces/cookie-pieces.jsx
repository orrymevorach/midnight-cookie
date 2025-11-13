import styles from './cookie-pieces.module.scss';
import Image from 'next/image';
import left from 'public/rebuild/cookies-n-creme-half.png';
import center from 'public/rebuild/cookies-n-creme-full-size.png';
import right from 'public/rebuild/cookies-n-creme-piece.png';
import clsx from 'clsx';

export default function CookiePieces({ classNames = {} }) {
  return (
    <div className={clsx(styles.container, classNames)}>
      <Image src={left} className={clsx(styles.image, styles.half)} />
      <Image src={center} className={clsx(styles.image, styles.full)} />
      <Image src={right} className={clsx(styles.image, styles.piece)} />
    </div>
  );
}
