import Image from 'next/image';
import styles from './gift-cards.module.scss';
import giftCardBanner from 'public/rebuild/gift-card-banner-2.png';
import giftCard from 'public/rebuild/gift-card.png';
import Button from 'components/shared/Button/Button';
import { useRef } from 'react';
import useAnimation from 'components/shared/Animation/useAnimation';

export default function GiftCards() {
  const ref = useRef();
  useAnimation({ ref, animateOnMobile: false });
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <Image src={giftCardBanner} alt="Gift Cards" />
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>Midnight Cookie E-Gift Card</h2>
        <div className={styles.giftCardImage}>
          <Image src={giftCard} alt="Gift Card" />
        </div>
        <p className={styles.description}>
          *Physical gifts cards available in store
        </p>
        <Button href="https://midnightcookie.securetree.com/">Buy Now</Button>
      </div>
    </div>
  );
}
