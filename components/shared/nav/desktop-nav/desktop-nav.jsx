import styles from './desktop-nav.module.scss';
import NavLinks from '../nav-links/nav-links';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import logo from 'public/rebuild/logo.png';

const sortNavLinksToLeftAndRight = ({ navData }) => {
  const rightNavItems = ['Contact', 'Order Now'];
  let left = [];
  let right = [];
  for (let navItem of navData) {
    const { title } = navItem;
    if (rightNavItems.includes(title)) {
      right.push(navItem);
    } else {
      left.push(navItem);
    }
  }
  return {
    left,
    right,
  };
};
export default function DesktopNav({ navData, pathname, animateNav = false }) {
  const { left, right } = sortNavLinksToLeftAndRight({ navData });
  const [isSticky, setIsSticky] = useState(false);

  // When user scrolls past height of window, reveal the nav bar and make it stick to top of page
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const windowHeight = 20;

      if (scrollPosition > windowHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <nav
      className={clsx(
        styles.nav,
        animateNav && styles.animateNav,
        animateNav && isSticky && styles.sticky
      )}
    >
      <Link href="/" className={styles.image}>
        <Image src={logo} alt="Midnight Cookie Logo" quality={70} />
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
