import styles from './mobile-menu.module.scss';
import HamburgerMenu from 'components/shared/nav/hamburger-menu';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'public/rebuild/logo.png';

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div className={styles.mobileMenu}>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />{' '}
      <Link href="/">
        <Image src={logo} alt="Logo" className={styles.logo} quality={70} />
      </Link>
    </div>
  );
}
