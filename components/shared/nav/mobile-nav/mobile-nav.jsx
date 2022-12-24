import styles from './mobile-nav.module.scss';
import NavLinks from '../nav-links';
import animations from 'mevo-components/animations/animations.module.scss';
import clsx from 'clsx';

export default function MobileNav({ navData, pathname, setIsOpen }) {
  return (
    <>
      <nav className={clsx(styles.mobileNav, animations.slideRight)}>
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
