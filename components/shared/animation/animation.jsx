import { useEffect, useState } from 'react';
import styles from './animation.module.scss';
import clsx from 'clsx';

export default function useAnimation({ ref }) {
  useEffect(() => {
    ref?.current?.classList.add(styles.container);
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const yPosition = ref?.current?.offsetTop;

      if (scrollPosition > yPosition - 400) {
        ref?.current?.classList.add(styles.animate);
      } else {
        ref?.current?.classList.remove(styles.animate);
      }
    });
  }, []);
}
