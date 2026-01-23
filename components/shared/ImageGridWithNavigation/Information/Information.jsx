import RichText from 'components/shared/rich-text/rich-text';
import styles from './Information.module.scss';

export default function StoreInformation({ currentItem, hoursOfOperation }) {
  return (
    <div className={styles.container}>
      <div className={styles.storeLeft}>
        {currentItem.launchDate && (
          <p className={styles.launchDate}>Launched {currentItem.launchDate}</p>
        )}
        <div className={styles.description}>
          <RichText json={currentItem.description} />
        </div>
      </div>
      <div className={styles.storeRight}>
        <h2 className={styles.locationTitle}>{currentItem.name}</h2>
        {currentItem.address && (
          <div className={styles.address}>
            <p>{currentItem.address}</p>
            <a
              className={styles.phoneNumber}
              href={`tel:${currentItem.phoneNumber}`}
            >
              {currentItem.phoneNumber}
            </a>
            <p>Toronto, ON</p>
          </div>
        )}
        {hoursOfOperation?.length > 0 && (
          <div className={styles.hoursOfOperation}>
            {hoursOfOperation.map(({ day, hours }) => (
              <div key={day} className={styles.row}>
                <p>
                  {day}: {hours}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
