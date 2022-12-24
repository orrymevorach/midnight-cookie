import styles from './paragraph.module.scss';
import clsx from 'clsx';

export default function Paragraph() {
  return (
    <div className={clsx(styles.textContainer)}>
      <h2 className={styles.title}>
        We're Toronto's ONLY Late Night Cookie Delivery
      </h2>
      <p className={styles.text}>
        The story of Midnight Cookie begins in the cold winter months of 2021.
        The pandemic changed a lot for us. Almost everything! We moved
        countries, gave up our jobs, and found ourselves often searching for a
        delicious late night snack! There was nothing ever that caught our eye
        and decided to take it into our own hands. Flash forward to a couple
        months of cookie testing, baking sessions, and Midnight Cookie was born.
        Our mission is to provide the most seamless fresh baking experience. All
        of our cookies are made to order and delivered fresh. Just like you
        baked them yourself. The cookies will be delivered straight to your door
        and can be paired with whatever you like (hint: milk is a great
        pairing!). We are open until 3:00 am on the weekends – no matter when
        you want a cookie, reach out and we will be able to help!{' '}
      </p>
      <p className={styles.text}>
        We hope you love these cookies as much as we do.
      </p>
      <p className={styles.text}>– From one late night snacker to another</p>
    </div>
  );
}
