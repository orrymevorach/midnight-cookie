import styles from './heading.module.scss';
import clsx from 'clsx';

export default function Heading({
  text = '',
  Element = 'h3',
  classNames = '',
}) {
  return <Element className={clsx(styles.heading, classNames)}>{text}</Element>;
}
