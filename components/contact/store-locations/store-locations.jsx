import { useState } from 'react';
import styles from './store-locations.module.scss';
import StoreImages from './store-images/store-images';
import Sidebar from './sidebar/sidebar';
import StoreInformation from './store-information/store-information';

export default function StoreLocations({ storeLocations }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStore = storeLocations[currentIndex];
  const images = currentStore.imagesCollection.items;
  console.log('currentStore', currentStore);

  return (
    <div className={styles.container}>
      <Sidebar
        setCurrentIndex={setCurrentIndex}
        storeLocations={storeLocations}
      />
      <div className={styles.rightContainer}>
        <StoreImages images={images} storeName={currentStore.storeName} />
        <StoreInformation currentStore={currentStore} />
      </div>
    </div>
  );
}
