import Image from 'next/image';
import styles from './StoreImages.module.scss';
import { useWindowSize } from 'hooks';
import MovementSlider from 'components/shared/MovementSlider/MovementSlider';
import { getMedia } from 'lib/contentful';

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
          {images.map((image, index) => {
            const imageData = getMedia(image);
            return (
              <Image
                src={imageData.src}
                width={imageData.width}
                height={imageData.height}
                alt={`Image ${index + 1} of ${storeName}`}
                className={styles.image}
                style={{ width: `${100 / images.length}%` }}
                key={imageData.src}
              />
            );
          })}
        </MovementSlider>
      ) : (
        images.map((image, index) => {
          const imageData = getMedia(image);
          return (
            <Image
              src={imageData.src}
              width={imageData.width}
              height={imageData.height}
              alt={`Image ${index + 1} of ${storeName}`}
              className={styles.image}
              key={imageData.src}
            />
          );
        })
      )}
    </div>
  );
}
