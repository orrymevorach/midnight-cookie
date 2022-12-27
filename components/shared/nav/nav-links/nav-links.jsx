import clsx from 'clsx';
import styles from './nav-links.module.scss';
import Link from 'next/link';

export default function NavLinks({ navData, pathname, isMobile = false }) {
  return (
    <>
      {navData.map(({ label, url }) => {
        const removeSlashes = ({ url }) => url.replace(/\//g, '');
        const isActive =
          removeSlashes({ url }) === removeSlashes({ url: pathname });
        return (
          <li
            key={label}
            className={clsx(
              styles.menuItem,
              isActive ? styles.isActive : '',
              isMobile ? styles.isMobile : ''
            )}
          >
            <Link href={url}>{label}</Link>
          </li>
        );
      })}
    </>
  );
}
