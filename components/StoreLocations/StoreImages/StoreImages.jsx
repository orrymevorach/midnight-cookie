import Image from 'next/image';
import styles from './StoreImages.module.scss';
import { useWindowSize } from 'hooks';
import MovementSlider from 'components/shared/MovementSlider/MovementSlider';

export default function StoreImages({ images, storeName }) {
  const { isDesktop } = useWindowSize();

  return (
    <div
      className={styles.imagesContainer}
      style={{
        gridTemplateColumns: isDesktop
          ? `repeat(${images.length}, 1fr)`
          : '1fr',
      }}
    >
      {!isDesktop ? (
        <MovementSlider data={images} hasDots={false} hasWhiteArrows>
          {images.map(({ url, width, height }, index) => (
            <Image
              src={url}
              width={width}
              height={height}
              alt={`Image ${index + 1} of ${storeName}`}
              className={styles.image}
              style={{ width: `${100 / images.length}%` }}
              key={url}
            />
          ))}
        </MovementSlider>
      ) : (
        images.map(({ url, width, height }, index) => (
          <Image
            src={url}
            width={width}
            height={height}
            alt={`Image ${index + 1} of ${storeName}`}
            className={styles.image}
            key={url}
          />
        ))
      )}
    </div>
  );
}
