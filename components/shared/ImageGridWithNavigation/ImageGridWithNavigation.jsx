import { useState } from 'react';
import styles from './ImageGridWithNavigation.module.scss';
import Images from './Images/Images';
import Sidebar from './Sidebar/Sidebar';
import Information from './Information/Information';

export default function ImageGridWithNavigation({
  title,
  data,
  hoursOfOperation,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = data[currentIndex];
  const images = currentItem.images;

  return (
    <div className={styles.container}>
      <Sidebar setCurrentIndex={setCurrentIndex} data={data} title={title} />
      <div className={styles.rightContainer}>
        <Images images={images} currentItemName={currentItem.name} />
        <Information
          currentItem={currentItem}
          hoursOfOperation={hoursOfOperation}
        />
      </div>
    </div>
  );
}
