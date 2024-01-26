import styles from './desktop-nav.module.scss';
import NavLinks from '../nav-links/nav-links';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import logo from 'public/rebuild/logo.png';

const sortNavLinksToLeftAndRight = ({ navData }) => {
  const leftNavItems = ['Order Now'];
  let left = [];
  let right = [];
  for (let navItem of navData) {
    const { title } = navItem;
    if (leftNavItems.includes(title)) {
      left.push(navItem);
    } else {
      right.push(navItem);
    }
  }
  return {
    left,
    right,
  };
};
export default function DesktopNav({ navData, pathname }) {
  const { left, right } = sortNavLinksToLeftAndRight({ navData });
  const [isSticky, setIsSticky] = useState(false);

  // When user scrolls past height of window, reveal the nav bar and make it stick to top of page
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <nav className={clsx(styles.nav, isSticky && styles.sticky)}>
      <Link href="/" className={styles.image}>
        <Image src={logo} alt="" />
      </Link>
      <ul>
        <div className={styles.row}>
          <NavLinks navData={left} pathname={pathname} />
        </div>

        <div className={styles.row}>
          <NavLinks navData={right} pathname={pathname} />
        </div>
      </ul>
    </nav>
  );
}
