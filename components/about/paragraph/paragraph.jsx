import styles from './paragraph.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import logo from '/public/rebuild/cursive-midnight.png';

export default function Paragraph() {
  return (
    <div className={clsx(styles.textContainer)}>
      <h2 className={styles.title}>
        <span className={styles.titleTop}>Welcome to</span>
        <br />
        <span className={styles.titleBig}>Midnight</span>
        <br />
        <span className={styles.titleBig}>Cookie</span>
      </h2>
      <p className={styles.text}>
        The story of Midnight Cookie begins in the cold winter months of 2021.
        The pandemic changed a lot for us. Almost everything! We moved
        countries, gave up our jobs, and found ourselves often searching for a
        delicious late night snack! We couldn't find many fresh options and
        decided to take it into our owns hands. Flash forward to a couple months
        of cookie testing and baking sessions, Midnight Cookie was born.Our
        mission is to provide the most seamless fresh baking experience. All of
        our cookies are made to order and served fresh. It's like you baked them
        yourself!
      </p>
      <p className={styles.text}>
        Come check us out at one of our locations or have your cookies delivered
        straight to your door. We are open until 2:00am everyday and 3:00am
        weekends.
      </p>
      <p className={styles.text}>
        We hope you love these cookies as much as we do.
      </p>
      <div className={styles.signatureContainer}>
        <div className={styles.signatureTopRow}>
          <p className={styles.text}>From one</p>
          <Image src={logo} className={styles.signature} />
        </div>
        <p className={styles.text}>snacker to another</p>
      </div>
    </div>
  );
}
