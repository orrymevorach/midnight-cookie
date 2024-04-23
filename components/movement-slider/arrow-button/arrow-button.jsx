import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import styles from './arrow-button.module.scss';

export default function ArrowButton({
  isVariant = false,
  handleClick,
  direction = 'left',
  isWhite = false,
}) {
  const mapDirectionToProps = {
    left: {
      icon: faChevronLeft,
      classNames: clsx(
        styles.leftButton,
        isVariant && styles.variantLeftButton,
        isWhite && styles.white
      ),
    },
    right: {
      icon: faChevronRight,
      classNames: clsx(
        styles.rightButton,
        isVariant && styles.variantRightButton,
        isWhite && styles.white
      ),
    },
  };
  const { classNames, icon } = mapDirectionToProps[direction];

  return (
    <button className={classNames} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} color="#fff" size="lg" />
    </button>
  );
}
