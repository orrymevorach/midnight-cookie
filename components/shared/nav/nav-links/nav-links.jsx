import clsx from 'clsx';
import styles from './nav-links.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function NavLinks({ navData, pathname, isMobile = false }) {
  return (
    <>
      {navData.map(({ title, url, hoverText }) => {
        const [isHovering, setIsHovering] = useState(false);
        const removeSlashes = ({ url }) => url.replace(/\//g, '');
        const isActive =
          removeSlashes({ url }) === removeSlashes({ url: pathname });
        return (
          <li
            key={title}
            className={clsx(
              styles.menuItem,
              isActive ? styles.isActive : '',
              isMobile ? styles.isMobile : ''
            )}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Link href={url}>
              {isHovering && hoverText ? hoverText : title}
            </Link>
          </li>
        );
      })}
    </>
  );
}
