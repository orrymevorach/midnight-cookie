import styles from './movement-slider.module.scss';
import { useSlider, useAutoSlide } from './hooks';
import ArrowButton from './arrow-button';
import Dots from './dots';
import { useRef, useEffect, useCallback } from 'react';
import useHasChanged from 'hooks/useHasChanged';
import { useSwipeable } from 'react-swipeable';

export default function Slider({
  data,
  children,
  hasDots = true,
  hasArrowButtons = true,
  hasTimer = false,
  allow360 = true, // 360 means sliding never stops, user can go to the end from the begining, or to the begining from the end
  variantButtons = false,
  hasWhiteArrows = false,
}) {
  const {
    state: { index, isAutoSlide },
    triggers: { NEXT_SLIDE, LAST_SLIDE, SET_SLIDE, START_AUTO_SLIDE },
  } = useSlider({ data });

  const handlers = useSwipeable({
    onSwipedLeft: NEXT_SLIDE,
    onSwipedRight: LAST_SLIDE,
  });

  const { timer } = useAutoSlide({
    hasTimer,
    START_AUTO_SLIDE,
    isAutoSlide,
    NEXT_SLIDE,
  });

  const handleSetIndex = useCallback(
    buttonIndex => {
      clearTimeout(timer.current); // only applies to sliders with autoSlide
      SET_SLIDE(buttonIndex);
    },
    [SET_SLIDE, timer]
  );

  const transform = (index * 100) / data.length;

  const hideLeftButton = !allow360 && index === 0;
  const hideRightButton = !allow360 && index === data.length - 1;

  // If data in slider changes, slide it back to the first slide
  const hasDataChanged = useHasChanged(data);
  useEffect(() => {
    if (hasDataChanged) {
      handleSetIndex(0);
    }
  }, [handleSetIndex, hasDataChanged]);

  return (
    <div className={styles.outerContainer} {...handlers}>
      {hasArrowButtons && !hideLeftButton && (
        <ArrowButton
          isVariant={variantButtons}
          handleClick={LAST_SLIDE}
          direction="left"
          isWhite={hasWhiteArrows}
          classNames={styles.leftArrow}
        />
      )}
      <div
        className={styles.innerContainer}
        style={{
          width: `${100 * data.length}%`,
          transform: `translateX(-${transform}%)`,
        }}
      >
        {children}
      </div>
      {hasArrowButtons && !hideRightButton && (
        <ArrowButton
          isVariant={variantButtons}
          handleClick={NEXT_SLIDE}
          direction="right"
          isWhite={hasWhiteArrows}
          classNames={styles.rightArrow}
        />
      )}

      {hasDots && (
        <Dots data={data} index={index} handleSetIndex={handleSetIndex} />
      )}
    </div>
  );
}
