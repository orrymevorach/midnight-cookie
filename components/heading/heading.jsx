import styles from './heading.module.scss';
import clsx from 'clsx';

const mapPriorityToHtmlTag = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};
export default function Heading({
  text = '',
  priority = 'h3',
  classNames = '',
}) {
  const Element = mapPriorityToHtmlTag[priority];
  return <Element className={clsx(styles.heading, classNames)}>{text}</Element>;
}
