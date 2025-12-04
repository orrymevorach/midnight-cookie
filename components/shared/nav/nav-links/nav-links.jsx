import clsx from 'clsx';
import styles from './nav-links.module.scss';
import Link from 'next/link';
import { useState, useRef } from 'react';
import useSetElementMinWidth from './useSetElementWidth';

export default function NavLinks({ navData, pathname, isMobile = false }) {
  return (
    <>
      {navData.map(({ title, url, hoverText, openInNewTab }) => {
        const [isHovering, setIsHovering] = useState(false);
        const linkRef = useRef(null);
        const minWidth = useSetElementMinWidth({ linkRef, title, hoverText });

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
            <Link
              href={url}
              ref={linkRef}
              style={{ minWidth: minWidth > 0 ? `${minWidth}px` : 'auto' }}
              target={openInNewTab ? '_blank' : '_self'}
              rel={openInNewTab ? 'noopener noreferrer' : ''}
            >
              {isHovering && hoverText ? hoverText : title}
            </Link>
          </li>
        );
      })}
    </>
  );
}
