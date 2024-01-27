import styles from './hours-of-operation.module.scss';
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

export default function HoursOfOperation() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Hours</p>
      <div className={styles.hoursOfOperation}>
        {hoursOfOperation.map(({ day, hours }) => (
          <div key={day} className={styles.row}>
            <p className={styles.day}>{day}</p>
            <p className={styles.hours}>{hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
