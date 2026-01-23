import styles from './Pricing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie } from '@fortawesome/free-solid-svg-icons';
import CookiePieces from 'components/About/cookie-pieces/cookie-pieces';
import { toDollars } from 'utils/utils';
import RichText from 'components/shared/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';

const config = {
  renderMarks: {
    // [MARKS.BOLD]: text => '',
    // [MARKS.ITALIC]: text => '',
    // [MARKS.UNDERLINE]: text => '',
    // [MARKS.CODE]: text => '',
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={styles.paragraph}>{children}</p>
    ),
    // [BLOCKS.DOCUMENT]: (node, children) => '',
    // [BLOCKS.HEADING_1]: (node, children) => '',
    // [BLOCKS.HEADING_2]: (node, children) => '',
    [BLOCKS.HEADING_2]: (node, children) => (
      <h3 className={styles.subheading}>{children}</h3>
    ),
    // [BLOCKS.HEADING_4]: (node, children) => '',
    // [BLOCKS.HEADING_5]: (node, children) => '',
    // [BLOCKS.HEADING_6]: (node, children) => '',
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className={styles.list}>{children}</ul>
    ),
    // [BLOCKS.OL_LIST]: (node, children) => '',
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    // [BLOCKS.QUOTE]: (node, children) => '',
    // [BLOCKS.HR]: (node, children) => '',
    // [BLOCKS.EMBEDDED_ENTRY]: (node, children) => '',
    // [BLOCKS.EMBEDDED_ASSET]: (node, children) => '',
    // [INLINES.EMBEDDED_ENTRY]: (node, children) => '',
    // [INLINES.HYPERLINK]: (node, children) => '',

    // [INLINES.ENTRY_HYPERLINK]: (node, children) => '',
    // [INLINES.ASSET_HYPERLINK]: (node, children) => '',
    // renderText: text => text.replace('!', '?'),
    // Add space between paragraphs
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  },
};

export default function Pricing({ cateringPricingOptionsData }) {
  if (!cateringPricingOptionsData) return;
  const { options, description } = cateringPricingOptionsData;
  return (
    <div id="pricing" className={styles.outerContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 120"
        className={styles.topSvg}
      >
        <path
          fillRule="evenodd"
          d="M0,0 C320,60 640,90 960,90 C1280,90 1600,60 1920,0 L1920,120 L0,120 L0,0 Z"
        ></path>
      </svg>

      <CookiePieces classNames={styles.cookies} />
      <div className={styles.container}>
        <div className={styles.pricing}>
          <h2 className={styles.title}>Pricing</h2>
          <div className={styles.grid}>
            {options.map((option, index) => {
              const price = toDollars(option.price);
              return (
                <div key={`pricing-${option.title}`} className={styles.row}>
                  <div className={styles.left}>
                    <FontAwesomeIcon icon={faCookie} className={styles.icon} />
                    <p className={styles.time}>{option.title}</p>
                  </div>
                  <p className={styles.price}>{price}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.includes}>
            <RichText json={description} config={config} />
          </div>
        </div>
      </div>

      <div className={styles.bottomSvg}>
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 217"
        >
          <g fillRule="evenodd" transform="matrix(-1 0 0 1 1920 0)">
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
    </div>
  );
}
