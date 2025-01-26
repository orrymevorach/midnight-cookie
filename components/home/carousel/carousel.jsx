import { useEffect, useState } from 'react';
import Dots from './Dots/Dots';
import styles from './carousel.module.scss';
import MediaItem from './MediaItem/MediaItem';
import { useWindowSize } from 'hooks';

export const getDuration = ({ currentItem, isMobile }) => {
  if (!currentItem?.duration && !currentItem?.mobileDuration) return 7000;
  if (isMobile && currentItem?.mobileDuration)
    return currentItem?.mobileDuration * 1000;
  return currentItem?.duration * 1000;
};

export default function Carousel({ media = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (!media.items.length) return;
    const currentItem = media.items[currentIndex];
    const duration = getDuration({ currentItem, isMobile });
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % media.items.length);
    }, duration);
    return () => clearInterval(interval);
  }, [currentIndex, media.items.length, media.items, isMobile]);

  return (
    <>
      <MediaItem media={media} currentIndex={currentIndex} />
      {media.items.length > 1 && (
        <Dots
          media={media}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </>
  );
}
