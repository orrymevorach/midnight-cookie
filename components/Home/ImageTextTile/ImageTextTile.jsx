import Image from 'next/image';
import styles from './ImageTextTile.module.scss';
import Button from 'components/shared/Button/Button';
import { useRef } from 'react';
import useAnimation from 'components/shared/Animation/useAnimation';
import clsx from 'clsx';

export default function ImageTextTile({
  imageSrc = '',
  title = '',
  description = '',
  buttonText = '',
  buttonLink = '',
  imageInCard = '',
  isBlue = false,
}) {
  const ref = useRef();
  useAnimation({ ref, animateOnMobile: false });
  return (
    <div className={clsx(styles.container, isBlue && styles.blue)} ref={ref}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt={title} />
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.giftCardImage}>
          {imageInCard && <Image src={imageInCard} alt={title} />}
        </div>
        <p className={styles.description}>{description}</p>
        <Button href={buttonLink}>{buttonText}</Button>
      </div>
    </div>
  );
}
