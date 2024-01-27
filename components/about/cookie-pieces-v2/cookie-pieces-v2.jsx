import styles from './cookie-pieces-v2.module.scss';
import Image from 'next/image';
import left from 'public/rebuild/cookie-piece-3.png';
import right from 'public/rebuild/cookie-piece.png';
import clsx from 'clsx';

export default function CookiePiecesV2() {
  return (
    <div className={styles.container}>
      <Image src={left} className={clsx(styles.image, styles.left)} />
      <Image src={right} className={clsx(styles.image, styles.right)} />
    </div>
  );
}
