import Image from 'next/image';
import styles from './store-images.module.scss';
import { useWindowSize } from 'hooks';
import MovementSlider from 'components/movement-slider';

export default function StoreImages({ images }) {
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
        <MovementSlider data={images} hasDots={false}>
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
        </MovementSlider>
      ) : (
        images.map(({ url, width, height }) => (
          <Image
            src={url}
            width={width}
            height={height}
            alt=""
            className={styles.image}
            key={url}
          />
        ))
      )}
    </div>
  );
}
