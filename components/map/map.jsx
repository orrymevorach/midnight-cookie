import { useWindowSize } from 'hooks';

export default function Map() {
  const { isDesktop } = useWindowSize();
  return (
    <iframe
      src="https://www.google.com/maps/d/embed?mid=12iXLELjezWQL7HvRzm0cglB7psi0Iuqm&ehbc=2E312F"
      width={isDesktop ? '50%' : '100%'}
      height="620"
    ></iframe>
  );
}
