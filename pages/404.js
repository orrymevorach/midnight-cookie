import styles from 'components/maintenance-mode/maintenance-mode.module.scss';

export default function PageNotFound() {
  return (
    <div className={styles.maintenanceContainer}>
      <img
        src="/wp-content/uploads/2021/10/Midnight-Cookie-Logo-sde1.png"
        alt=""
        className={styles.logo}
      />
      <h2 className={styles.heading}>404: Page Not Found</h2>
      <p>Apologies, it appears this page does not exist.</p>
    </div>
  );
}
