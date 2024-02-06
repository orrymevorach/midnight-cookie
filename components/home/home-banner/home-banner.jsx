import Button from 'components/shared/button';
import styles from './home-banner.module.scss';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'hooks';

export default function HomeBanner() {
  const { isMobile } = useWindowSize();
  const [showHeading, setShowHeading] = useState(false);

  // When user scrolls past height of window, reveal the nav bar and make it stick to top of page
  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (!isMobile) {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 200) {
          setShowHeading(true);
        } else {
          setShowHeading(false);
        }
      } else {
        setShowHeading(true);
      }
    });
    if (isMobile) {
      setShowHeading(true);
    }
  }, [isMobile]);

  return (
    <div className={styles.container}>
      {showHeading && (
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
            Cookies <br />
            baked fresh
            <br /> for you
          </h2>
          <Button
            href="https://order.tapmango.com/merchant/dfb63169-3067-4b49-89f3-09deeb3eba9b/order/catalog"
            classNames={styles.button}
          >
            Order Now
          </Button>
        </div>
      )}
    </div>
  );
}
