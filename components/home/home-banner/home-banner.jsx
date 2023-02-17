import clsx from 'clsx';
import Banner from 'components/shared/banner';
import Button from 'components/shared/button';
import styles from './home-banner.module.scss';
import animations from 'mevo-components/animations/animations.module.scss';

const hoursOfOperation = [
  {
    day: 'Monday',
    hours: 'Closed',
  },
  {
    day: 'Tuesday - Thursday',
    hours: '3:00 PM - 2:00 AM',
  },
  {
    day: 'Friday',
    hours: '3:00 PM - 3:00 AM',
  },
  {
    day: 'Saturday',
    hours: '2:00 PM - 3:00 AM',
  },
  {
    day: 'Sunday',
    hours: '3:00 PM - 12:00 AM',
  },
];

const HoursOfOperation = ({ hoursOfOperation }) => {
  return (
    <div className={styles.hoursOfOperation}>
      {hoursOfOperation.map(({ day, hours }) => (
        <div className={styles.line}>
          <p className={styles.day}>{day}</p>
          <p className={styles.hours}>{hours}</p>
        </div>
      ))}
    </div>
  );
};

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
          <HoursOfOperation hoursOfOperation={hoursOfOperation} />
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
