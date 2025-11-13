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
          Get hot mini doughnuts made fresh at your next event!
        </p>
        <p className={styles.paragraph}>
          We bring the heat directly to you, with our sleek, seductive setup and
          team of Sugar Daddy Doughnut Maestros dishing out unlimited doughnuts
          to your guests for a designated time. Each doughnut is served hot,
          freshly dressed straight from our signature fryer.{' '}
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
