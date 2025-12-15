'use client';
import styles from './SlidingCarousel.module.scss';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from 'components/shared/Button/Button';
import { slugMap } from 'utils/constants';
import Link from 'next/link';

const Tile = ({ product }) => {
  const [isHovering, setIsHovering] = useState(false);
  const firstImage = product.images[0].thumbnails.large;
  return (
    <Link
      href={slugMap.SHOP}
      className={styles.image}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image src={firstImage.url} alt={product.alt} fill />
      {isHovering && (
        <div className={styles.overlay}>
          <p className={styles.imageText}>{product.name}</p>
          <p className={styles.description}>{product.description}</p>
          <Button isSmall isGold classNames={styles.button} href={slugMap.SHOP}>
            Shop Now
          </Button>
        </div>
      )}
    </Link>
  );
};

export default function SlidingCarousel({ products }) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // touch state
  const touchStartX = useRef(0);
  const touchOffsetX = useRef(0);
  const isDragging = useRef(false);

  const productsWithDuplicates = [...products, ...products];

  // scroll animation
  useEffect(() => {
    const speed = 0.5;
    let animationFrameId;

    const animate = () => {
      // only auto-scroll if not dragging
      if (!isDragging.current) {
        setOffset(prev => {
          const container = containerRef.current;
          if (!container) return prev;

          const singleContentWidth = container.scrollWidth / 2;
          const next = prev + speed;
          return next >= singleContentWidth ? 0 : next;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // touch handlers
  const handleTouchStart = e => {
    isDragging.current = true;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = e => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    const deltaX = touchStartX.current - currentX;
    touchOffsetX.current = deltaX;

    setOffset(prev => {
      const container = containerRef.current;
      if (!container) return prev;
      const singleContentWidth = container.scrollWidth / 2;
      let next = prev + deltaX;
      if (next >= singleContentWidth) next -= singleContentWidth;
      if (next < 0) next += singleContentWidth;
      return next;
    });

    touchStartX.current = currentX;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    touchOffsetX.current = 0;
  };

  return (
    <div className={styles.container} id="shop">
      {/* <SectionHeading isBlue>Shop 2025 Merch</SectionHeading> */}
      <div className={styles.outerScrollContainer}>
        <div
          className={styles.innerScrollContainer}
          ref={containerRef}
          style={{ transform: `translateX(-${offset}px)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {productsWithDuplicates.map((product, index) => (
            <Tile product={product} key={`product-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
