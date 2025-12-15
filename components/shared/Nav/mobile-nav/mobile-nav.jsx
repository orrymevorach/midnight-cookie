import styles from './mobile-nav.module.scss';
import NavLinks from '../nav-links';
import clsx from 'clsx';

export default function MobileNav({ navData, pathname, setIsOpen }) {
  return (
    <>
      <nav className={clsx(styles.mobileNav)}>
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
