import styles from './Banner.module.scss';
import clsx from 'clsx';

export default function Banner({
  children,
  hasFade = false,
  isSmall = false,
  heading = '',
  backgroundImage = '/wp-content/uploads/2022/06/thumbnail_BAF085FB-4D3D-4454-8B42-968E3DB54025.jpg',
  hasOverlay = true,
}) {
  return (
    <div className={clsx(styles.banner, isSmall ? styles.isSmall : '')}>
      {heading && (
        <div className={clsx(styles.textContainer)}>
          <h2>{heading}</h2>
        </div>
      )}
      {children}

      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {hasOverlay && <div className={styles.overlay}></div>}
      </div>
    </div>
  );
}
