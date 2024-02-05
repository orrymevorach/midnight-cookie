import { useState } from 'react';
import styles from './store-locations.module.scss';
import Image from 'next/image';
import { hoursOfOperation } from 'components/home/hours-of-operation/hours-of-operation';
import RichText from 'components/rich-text/rich-text';

export default function StoreLocations({ storeLocations }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStore = storeLocations[currentIndex];
  const images = currentStore.imagesCollection.items;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.title}>Toronto</p>
        {storeLocations.map(({ storeName }, index) => (
          <div key={storeName}>
            <button
              className={styles.storeName}
              onClick={() => setCurrentIndex(index)}
            >
              {storeName}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.locationsContainer}>
        <div className={styles.imagesContainer}>
          {images.map(({ url, width, height }) => (
            <Image
              src={url}
              width={width}
              height={height}
              alt=""
              className={styles.image}
              style={{ width: `${100 / images.length}%` }}
              key={url}
            />
          ))}
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.storeLeft}>
            <p className={styles.launchDate}>
              Launched {currentStore.launchDate}
            </p>
            <div className={styles.description}>
              <RichText json={currentStore.description?.json} />
            </div>
          </div>
          <div className={styles.storeRight}>
            <p className={styles.locationTitle}>{currentStore.storeName}</p>
            <div className={styles.address}>
              <p>{currentStore.address}</p>
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
      </div>
    </div>
  );
}
