import styles from './home-banner.module.scss';

export default function HomeBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Our new storefront is coming soon</h2>
        <p>Check back here for updates...</p>
        <p>
          Orders will be paused until reopening. Please message us for any
          special requests.
        </p>
      </div>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}
