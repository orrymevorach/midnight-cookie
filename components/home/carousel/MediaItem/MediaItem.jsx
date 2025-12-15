import clsx from 'clsx';
import styles from './MediaItem.module.scss';
import { useWindowSize } from 'hooks';
import HomeBanner from 'components/home/home-banner';
import { getMedia } from 'lib/contentful';

const MediaComponent = ({ item, items }) => {
  const { isMobile } = useWindowSize();
  let media = item.video ? getMedia(item.video) : getMedia(item.image);
  if (isMobile && item.mobileMedia) media = getMedia(item.mobileMedia);
  // const duration = item.duration || 7;

  if (item.video) {
    return (
      <div className={styles.videoContainer}>
        <video
          src={media.src}
          className={styles.video}
          autoPlay
          muted
          playsInline
        ></video>
      </div>
    );
  }
  return (
    <HomeBanner
      imageUrl={media.src}
      text={item.text}
      buttonText={item.buttonText}
      buttonHoverText={item.buttonHoverText}
      buttonLink={item.buttonLink}
      shouldAnimate={items.length > 1}
    />
  );
};

export default function MediaHighlightImage({ media, currentIndex }) {
  return (
    <div className={styles.container}>
      {media.items.map((item, index) => {
        if (index === currentIndex)
          return (
            <div className={styles.mediaItem} key={`highlight-${item.title}`}>
              <MediaComponent item={item} items={media.items} />
            </div>
          );
      })}
      {media.items.map((item, index) => {
        const nextSlide = media.items[currentIndex + 1];
        const nextSlideDuration = nextSlide?.duration || 7;
        if (index === currentIndex + 1)
          return (
            <div
              key={`highlight-next-${item.title}`}
              className={clsx(styles.mediaItem, styles.nextSlide)}
              style={{ animationDelay: `${nextSlideDuration}s` }}
            >
              <MediaComponent item={item} items={media.items} />
            </div>
          );
      })}
    </div>
  );
}
