import clsx from 'clsx';
import styles from './information.module.scss';

export default function Information() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.title}>
          Private Affair: <br /> On-Site Catering
        </h1>
        <p className={styles.subheading}>
          Get freshly baked cookiesmade fresh at your next event!
        </p>
        <p className={styles.paragraph}>
          We bring the heat directly to you, with our sleek, seductive setup and
          team of cookie artists dishing out unlimited cookies to your guests
          for a designated time. Each cookie is served hot, freshly dressed
          straight from our signature oven.
        </p>
        <p className={styles.paragraph}>
          We handle everything, while you enjoy pure indulgence.{' '}
        </p>
        <p className={clsx(styles.paragraph, styles.bold)}>
          Ready for indoor or outdoor setups!
        </p>
      </div>
    </div>
  );
}
