import styles from './pricing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie } from '@fortawesome/free-solid-svg-icons';

const pricing = [
  {
    time: '1 Hour (minimum)',
    price: '$1,800',
  },
  {
    time: '2 Hours',
    price: '$3,000',
  },
  {
    time: '3 hours',
    price: '$4,000',
  },
];

export default function Pricing() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 120"
        className={styles.topSvg}
      >
        <path
          fill-rule="evenodd"
          d="M0,0 C320,60 640,90 960,90 C1280,90 1600,60 1920,0 L1920,120 L0,120 L0,0 Z"
        ></path>
      </svg>
      <div className={styles.bottomContainer}>
        <div className={styles.container}>
          <div className={styles.pricing}>
            <h2 className={styles.title}>Pricing</h2>
            <div className={styles.grid}>
              {pricing.map((option, index) => (
                <div key={`pricing-${option.time}`} className={styles.row}>
                  <div className={styles.left}>
                    <FontAwesomeIcon icon={faCookie} className={styles.icon} />
                    <p className={styles.time}>{option.time}</p>
                  </div>
                  <p className={styles.price}>{option.price}</p>
                </div>
              ))}
            </div>
            <div className={styles.includes}>
              <h3 className={styles.subheading}>Includes:</h3>
              <ul className={styles.list}>
                <li>Unlimited freshly-made hot mini doughnuts and coffee!</li>
                <li>
                  Standard serving: 6 pack + 1 dunk (can be modified upon
                  request)
                </li>
                <li>2-4 person staff on-site</li>
                <li>Custom dunk options available upon request</li>
              </ul>
              <p className={styles.paragraph}>
                Note: First hour is all inclusive of set up, tear down and
                delivery (no hidden fees). For events outside of GTA, there is a
                3-hour minimum service.{' '}
              </p>
              <p className={styles.paragraph}>
                * Ask about custom machine wraps to match your theme!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomSvg}>
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 217"
        >
          <g fill-rule="evenodd" transform="matrix(-1 0 0 1 1920 0)">
            <path
              d="M0,57.46875 C203.364583,135.217754 494.835938,156.564108 874.414062,121.507813 C1192.61198,-13.9827666 1541.14063,-35.3291208 1920,57.46875 L1920,207 L0,207 L0,57.46875 Z"
              opacity=".3"
            ></path>
            <path
              d="M0,79 C292.46875,165.453125 612.46875,165.453125 960,79 C1307.53125,-7.453125 1627.53125,-7.453125 1920,79 L1920,207 L0,207 L0,79 Z"
              opacity=".6"
            ></path>
            <path d="M0,89 C288.713542,146.786458 608.713542,146.786458 960,89 C1311.28646,31.2135417 1631.28646,31.2135417 1920,89 L1920,217 L0,217 L0,89 Z"></path>
          </g>
        </svg>
      </div>
    </>
  );
}
