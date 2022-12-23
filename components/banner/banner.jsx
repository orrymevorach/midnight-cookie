import styles from './banner.module.scss';
import clsx from 'clsx';
import animations from 'mevo-components/animations/animations.module.scss';

export default function Banner({
  children,
  hasFade = false,
  isSmall = false,
  heading = '',
}) {
  return (
    <div className={clsx(styles.banner, isSmall ? styles.isSmall : '')}>
      <div className={clsx(styles.textContainer, hasFade && animations.fadeUp)}>
        <h2>{heading}</h2>
        {children}
      </div>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}
