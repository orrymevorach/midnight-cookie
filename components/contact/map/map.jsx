import { useWindowSize } from 'hooks';

export default function Map() {
  const { isDesktop } = useWindowSize();
  return (
    // <iframe
    //   src="https://www.google.com/maps/d/embed?mid=12iXLELjezWQL7HvRzm0cglB7psi0Iuqm&ehbc=2E312F"
    //   width={isDesktop ? '50%' : '100%'}
    //   height="600"
    // ></iframe>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.389760565363!2d-79.3996303241897!3d43.702448571099836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b337e2be48691%3A0x206c19d8f7ddc265!2sMidnight%20Cookie!5e0!3m2!1sen!2sca!4v1682012055603!5m2!1sen!2sca"
      width="100%"
      height="600"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
