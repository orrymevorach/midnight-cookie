import clsx from 'clsx';
import Banner from 'components/shared/banner';
import Button from 'components/shared/button';
import styles from './home-banner.module.scss';
import animations from 'mevo-components/animations/animations.module.scss';

export default function HomeBanner() {
  return (
    <Banner
      backgroundImage="/wp-content/uploads/2021/10/MIDNIGHT.jpg"
      hasOverlay={false}
    >
      <div className={styles.container}>
        <div className={clsx(styles.textContainer, animations.fadeUp)}>
          <div className={styles.heading}>
            <h1>
              Toronto's Only <br />
              Late Night <br />
              <span className={styles.pink}>Cookie Delivery</span>
            </h1>
          </div>
          <p className={styles.blue}>Delivered Fresh and Warm!</p>
          <p className={styles.hours}>
            Reopening soon!
            {/* <br /> Tues - Thurs 8 PM - 2 AM
            <br /> Fri - Sun 8 PM - 3 AM */}
          </p>
          <Button classNames={styles.button} href="order-now">
            Order Now
          </Button>
        </div>
        <div className={clsx(styles.imageContainer, animations.fadeUp)}>
          <img
            src="/images/cookies/cookie-crumbs.png"
            alt=""
            className={styles.crumbsImage}
          />
          <img
            src="/images/cookies/midnight-cookie-main-sprink-pink.png"
            alt=""
            className={styles.cookieImage}
          />
        </div>
      </div>
    </Banner>
  );
}
