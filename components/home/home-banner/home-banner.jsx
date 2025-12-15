import Button from 'components/shared/Button/Button';
import styles from './home-banner.module.scss';
import AnimatedText from './animated-text/animated-text';
// import { useEffect, useState } from 'react';
import { useWindowSize } from 'hooks';
import RichText from 'components/shared/rich-text';
import clsx from 'clsx';

import { BLOCKS } from '@contentful/rich-text-types';

const customConfig = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <>
        <span>{children}</span>
        <br />
      </>
    ),
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  },
};

export default function HomeBanner({
  imageUrl,
  text,
  buttonText = 'Order Now',
  buttonHoverText = 'Eat Cookies',
  buttonLink = 'https://order.tapmango.com/merchant/dfb63169-3067-4b49-89f3-09deeb3eba9b/order/catalog',
  shouldAnimate = true,
}) {
  const { isMobile } = useWindowSize();
  const videoSrc = isMobile
    ? '/rebuild/home-video-mobile.mp4'
    : '/rebuild/home-video.mp4';
  // const [showHeading, setShowHeading] = useState(true);

  // When user scrolls past height of window, reveal the nav bar and make it stick to top of page
  // useEffect(() => {
  //   window.addEventListener('scroll', function () {
  //     if (!isMobile) {
  //       const scrollPosition = window.scrollY;
  //       if (scrollPosition > 200) {
  //         setShowHeading(true);
  //       } else {
  //         setShowHeading(false);
  //       }
  //     } else {
  //       setShowHeading(true);
  //     }
  //   });
  //   if (isMobile) {
  //     setShowHeading(true);
  //   }
  // }, [isMobile]);

  return (
    <div
      className={clsx(styles.container, shouldAnimate && styles.animate)}
      style={{
        backgroundImage: `url("${imageUrl}")`,
      }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          <RichText json={text.json} config={customConfig} />
        </h1>
        <Button
          href={buttonLink}
          classNames={styles.button}
          hoverText={buttonHoverText}
        >
          {buttonText}
        </Button>
      </div>
      {/* <div className={styles.videoContainer}>
        <div className={styles.lightOverlay}></div>
        <video
          src={videoSrc}
          autoPlay
          muted
          className={styles.video}
          playsInline
        ></video>

        <div className={styles.bottomContainer}>
          <h2 className={styles.heading}>
            {isMobile ? (
              <>
                <AnimatedText text={`SNACK\u00A0ON\u00A0OUR`} />
                <AnimatedText text={`NEW\u00A0HOLIDAY`} />
                <AnimatedText text={`LINEUP`} />
              </>
            ) : (
              <AnimatedText
                text={`SNACK\u00A0ON\u00A0OUR\u00A0NEW\u00A0HOLIDAY\u00A0LINEUP`}
              />
            )}
          </h2>
          <Button
            href="https://order.tapmango.com/merchant/dfb63169-3067-4b49-89f3-09deeb3eba9b/order/catalog"
            classNames={styles.videoButton}
            hoverText="Eat Cookies"
          >
            Shop Holiday
          </Button>
        </div>
      </div> */}
    </div>
  );
}
