import { useEffect, useState } from 'react';
import styles from './animation.module.scss';
import { useWindowSize } from 'hooks';

export default function useAnimation({ ref, animateOnMobile = true }) {
  const { isMobile } = useWindowSize();
  const shouldAnimate = !isMobile || (isMobile && animateOnMobile);
  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (shouldAnimate) {
        ref?.current?.classList.add(styles.container);
        const scrollPosition = window.scrollY;
        const yPosition = ref?.current?.offsetTop;

        if (scrollPosition > yPosition - 650) {
          ref?.current?.classList.add(styles.animate);
        } else {
          ref?.current?.classList.remove(styles.animate);
        }
      }
    });
  }, [animateOnMobile]);
}
