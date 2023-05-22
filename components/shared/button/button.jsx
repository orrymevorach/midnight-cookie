import clsx from 'clsx';
import Link from 'next/link';
import styles from './button.module.scss';

export default function Button({
  isDisabled = false,
  type = 'button',
  children,
  href = '',
  classNames = '',
  target = null,
}) {
  return href ? (
    <Link
      href={href}
      className={clsx(styles.button, classNames)}
      target={target}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      disabled={isDisabled}
      className={clsx(styles.button, classNames)}
    >
      {children}
    </button>
  );
}
