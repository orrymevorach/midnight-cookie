import styles from './mobile-menu.module.scss';
import HamburgerMenu from 'components/shared/nav/hamburger-menu';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div className={styles.mobileMenu}>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />{' '}
      <li className={styles.image}>
        <Link href="/">
          <img
            src="/wp-content/uploads/2021/10/Midnight-Cookie-Logo-sde1.png"
            alt=""
          />
        </Link>
      </li>
    </div>
  );
}
