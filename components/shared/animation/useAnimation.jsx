import { useEffect, useState } from 'react';
import styles from './animation.module.scss';
import { useWindowSize } from 'hooks';

export default function useAnimation({ ref, animateOnMobile = true }) {
  const { isMobile } = useWindowSize();
  const [isAnimated, setIsAnimated] = useState(false);
  const shouldAnimate = !isMobile || (isMobile && animateOnMobile);
  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (shouldAnimate) {
        ref?.current?.classList.add(styles.container);
        const scrollPosition = window.scrollY;
        const yPosition = ref?.current?.offsetTop;
        const offset = window.innerHeight * 0.8;

        if (!isAnimated && scrollPosition > yPosition - offset) {
          ref?.current?.classList.add(styles.animate);
          setIsAnimated(true);
        } else {
          ref?.current?.classList.remove(styles.animate);
          setIsAnimated(false);
        }
      }
    });
  }, [animateOnMobile]);
}
