import clsx from 'clsx';
import styles from './Information.module.scss';
import Image from 'next/image';
import foodTruck from 'public/rebuild/food-truck-1.jpg';
import Button from 'components/shared/Button/Button';
import { slugMap } from 'utils/constants';

export default function Information() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Private Affair: <br /> On-Site Catering
        </h1>
        <p className={styles.subheading}>
          Get freshly baked cookies made fresh at your next event!
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
        <div className={styles.buttonsContainer}>
          <Button
            isSmall
            isSecondary
            classNames={styles.pricingButton}
            href={`${slugMap.CATERING}#pricing`}
          >
            View Pricing
          </Button>
          <Button isSmall href={`${slugMap.CATERING}#form`}>
            Reserve Now
          </Button>
        </div>
      </div>
      <div className={styles.right}>
        <Image src={foodTruck} alt="Food Truck" />
      </div>
    </div>
  );
}
