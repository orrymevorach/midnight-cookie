import styles from './desktop-nav.module.scss';
import NavLinks from '../nav-links/nav-links';
import Link from 'next/link';
import Image from 'next/image';

export default function DesktopNav({ navData, pathname }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <Image
              src="https://www.midnightcookie.ca/wp-content/uploads/2021/10/Midnight-Cookie-Logo-sde1.png"
              width={100}
              height={100}
            />
          </Link>
        </li>

        <NavLinks navData={navData} pathname={pathname} />
      </ul>
    </nav>
  );
}
