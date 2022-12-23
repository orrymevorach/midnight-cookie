import styles from './mobile-nav.module.scss';
import NavLinks from '../nav-links';

export default function MobileNav({ navData, pathname, setIsOpen }) {
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
