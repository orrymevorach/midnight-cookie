import { useEffect } from 'react';
import styles from './mobile-nav.module.scss';
import NavLinks from '../nav-links';

export default function MobileNav({ navData, pathname, setIsOpen, isOpen }) {
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }, [isOpen]);
  return (
    <>
      <nav className={styles.mobileNav} data-aos="fade-right">
        <ul>
          <NavLinks navData={navData} pathname={pathname} isMobile />
        </ul>
      </nav>
      <button
        onClick={() => setIsOpen(false)}
        className={styles.overlay}
      ></button>
    </>
  );
}
