import { useState, useEffect } from 'react';
import styles from './nav.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

export default function Nav({ navData }) {
  const [pathname, setPathname] = useState('');
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
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
        {navData.map(({ label, uri }) => {
          const removeSlashes = ({ uri }) => uri.replace(/\//g, '');
          const isActive =
            removeSlashes({ uri }) === removeSlashes({ uri: pathname });
          return (
            <li
              key={label}
              className={clsx(styles.menuItem, isActive ? styles.isActive : '')}
            >
              <Link href={uri}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
