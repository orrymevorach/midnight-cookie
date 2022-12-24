import { useState, useEffect } from 'react';
import { useWindowSize, useStopScroll } from 'hooks';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';
import MobileMenu from './mobile-menu';

export default function Nav({ navData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState('');
  const { isMobile } = useWindowSize();

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useStopScroll({ isOpen });

  return (
    <>
      {!isMobile ? (
        <DesktopNav navData={navData} pathname={pathname} />
      ) : (
        <>
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          {isOpen && (
            <MobileNav
              navData={navData}
              pathname={pathname}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          )}
        </>
      )}
    </>
  );
}
