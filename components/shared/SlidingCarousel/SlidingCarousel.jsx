'use client';
import styles from './SlidingCarousel.module.scss';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { slugMap } from 'utils/constants';
import Link from 'next/link';
import { getMedia } from 'lib/contentful';
import Heading from '../Heading/Heading';
import useAnimation from '../Animation/useAnimation';

const Tile = ({ product }) => {
  const [isHovering, setIsHovering] = useState(false);
  const imageData = getMedia(product.image);
  return (
    <div
      // <Link
      // href={'/'}
      className={styles.image}
      // onMouseEnter={() => setIsHovering(true)}
      // onMouseLeave={() => setIsHovering(false)}
    >
      <Image src={imageData.src} alt={imageData.alt} fill />
      {isHovering && (
        <div className={styles.overlay}>
          <p className={styles.imageText}>{product.name}</p>
          <p className={styles.description}>{product.description}</p>
          {/* <Button isSmall isGold classNames={styles.button} href={slugMap.SHOP}> */}
          Shop Now
          {/* </Button> */}
        </div>
      )}
      {/* </Link> */}
    </div>
  );
};

export default function SlidingCarousel({ products }) {
  const containerRef = useRef(null);
  const outerContainerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  useAnimation({ ref: outerContainerRef, animateOnMobile: false });

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
    <div className={styles.container} id="shop" ref={outerContainerRef}>
      <Heading>Shop Our Merch</Heading>
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
