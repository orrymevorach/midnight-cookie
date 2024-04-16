import RichText from 'components/rich-text/rich-text';
import styles from './store-information.module.scss';
import { hoursOfOperation } from 'components/home/hours-of-operation/hours-of-operation';

export default function StoreInformation({ currentStore }) {
  return (
    <div className={styles.container}>
      <div className={styles.storeLeft}>
        <p className={styles.launchDate}>Launched {currentStore.launchDate}</p>
        <div className={styles.description}>
          <RichText json={currentStore.description?.json} />
        </div>
      </div>
      <div className={styles.storeRight}>
        <p className={styles.locationTitle}>{currentStore.storeName}</p>
        <div className={styles.address}>
          <p>{currentStore.address}</p>
          <a className={styles.phoneNumber} href={`tel:${currentStore.phoneNumber}`}>{currentStore.phoneNumber}</a>
          <p>Toronto, ON</p>
        </div>
        <div className={styles.hoursOfOperation}>
          {hoursOfOperation.map(({ day, hours }) => (
            <div key={day} className={styles.row}>
              <p>
                {day}: {hours}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
