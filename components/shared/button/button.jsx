import clsx from 'clsx';
import Link from 'next/link';
import styles from './button.module.scss';
import { useState } from 'react';

export default function Button({
  isDisabled = false,
  type = 'button',
  children,
  href = '',
  classNames = '',
  target = null,
  style = {},
  hoverText = '',
}) {
  const [text, setText] = useState(hoverText || children);
  const handleMouseOver = () => {
    const textToShow = hoverText || children;
    setText(textToShow);
  };
  const handleMouseLeave = () => {
    setText(children);
  };
  return href ? (
    <Link
      href={href}
      className={clsx(styles.button, classNames)}
      target={target}
      style={style}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </Link>
  ) : (
    <button
      type={type}
      disabled={isDisabled}
      className={clsx(styles.button, classNames)}
      style={style}
    >
      {text}
    </button>
  );
}
