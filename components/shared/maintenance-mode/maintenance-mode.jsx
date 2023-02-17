import styles from './maintenance-mode.module.scss';

export default function MaintenanceMode() {
  return (
    <div className={styles.maintenanceContainer}>
      <img
        src="/wp-content/uploads/2021/10/Midnight-Cookie-Logo-sde1.png"
        alt=""
        className={styles.logo}
      />
      <h2 className={styles.heading}>
        Our site is currently undergoing maintenance.
      </h2>
      <p>
        We apologize for the inconvenience, and expect to be back up shortly!
      </p>
    </div>
  );
}
