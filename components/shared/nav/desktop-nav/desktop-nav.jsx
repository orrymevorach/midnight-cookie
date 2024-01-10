import styles from './desktop-nav.module.scss';
import NavLinks from '../nav-links/nav-links';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

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
      <ul>
        <div className={styles.row}>
          <NavLinks navData={left} pathname={pathname} />
        </div>

        <li className={styles.image}>
          <Link href="/">
            <Image
              src="/wp-content/uploads/2021/10/Midnight-Cookie-Logo-sde1.png"
              width={100}
              height={100}
              alt=""
            />
          </Link>
        </li>
        <div className={styles.row}>
          <NavLinks navData={right} pathname={pathname} />
        </div>
      </ul>
    </nav>
  );
}
