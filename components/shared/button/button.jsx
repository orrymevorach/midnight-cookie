import clsx from 'clsx';
import Link from 'next/link';
import styles from './Button.module.scss';
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
  isSecondary = false,
  isSmall = false,
}) {
  const [text, setText] = useState(hoverText || children);
  const handleMouseOver = () => {
    const textToShow = hoverText || children;
    setText(textToShow);
  };
  const handleMouseLeave = () => {
    setText(children);
  };
  const className = clsx(
    styles.button,
    isSecondary && styles.secondary,
    isSmall && styles.small,
    classNames
  );
  return href ? (
    <Link
      href={href}
      className={className}
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
      className={className}
      style={style}
    >
      {text}
    </button>
  );
}
