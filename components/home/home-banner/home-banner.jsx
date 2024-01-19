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
        <div key={day} className={styles.line}>
          <p className={styles.day}>{day}</p>
          <p className={styles.hours}>{hours}</p>
        </div>
      ))}
    </div>
  );
};

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
