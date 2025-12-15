import styles from './Heading.module.scss';
import clsx from 'clsx';

export default function Heading({ Element = 'h3', classNames = '', children }) {
  return (
    <Element className={clsx(styles.heading, classNames)}>{children}</Element>
  );
}
