import clsx from 'clsx';
import styles from './nav-links.module.scss';
import Link from 'next/link';

export default function NavLinks({ navData, pathname, isMobile = false }) {
  return (
    <>
      {navData.map(({ label, uri }) => {
        const removeSlashes = ({ uri }) => uri.replace(/\//g, '');
        const isActive =
          removeSlashes({ uri }) === removeSlashes({ uri: pathname });
        return (
          <li
            key={label}
            className={clsx(
              styles.menuItem,
              isActive ? styles.isActive : '',
              isMobile ? styles.isMobile : ''
            )}
          >
            <Link href={uri}>{label}</Link>
          </li>
        );
      })}
    </>
  );
}
