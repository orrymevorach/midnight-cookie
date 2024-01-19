import Button from 'components/shared/button';
import styles from './home-banner.module.scss';

export default function HomeBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          Cookies <br />
          baked fresh
          <br /> for you
        </h2>
        <Button classNames={styles.button}>Order Now</Button>
      </div>
    </div>
  );
}
