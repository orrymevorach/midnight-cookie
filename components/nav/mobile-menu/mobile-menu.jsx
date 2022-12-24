import styles from './mobile-menu.module.scss';
import HamburgerMenu from 'components/hamburger-menu';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div className={styles.mobileMenu}>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />{' '}
      <li className={styles.image}>
        <Link href="/">
          <Image
            src="https://www.midnightcookie.ca/wp-content/uploads/2021/10/Midnight-Cookie-Logo-sde1.png"
            width={100}
            height={100}
            alt=""
            priority
          />
        </Link>
      </li>
    </div>
  );
}
