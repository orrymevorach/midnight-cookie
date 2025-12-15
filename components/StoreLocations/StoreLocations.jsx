import { useState } from 'react';
import styles from './StoreLocations.module.scss';
import StoreImages from './StoreImages/StoreImages';
import Sidebar from './Sidebar/Sidebar';
import StoreInformation from './StoreInformation/StoreInformation';

export default function StoreLocations({ storeLocations }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStore = storeLocations[currentIndex];
  const images = currentStore.images;

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
