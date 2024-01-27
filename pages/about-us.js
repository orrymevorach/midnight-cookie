import Layout from 'components/shared/layout';
import { getFaqPage, getPageLoadData } from 'lib/api';
import { slugMap } from 'utils/constants';
import styles from './page-container.module.scss';
import Paragraph from 'components/about/paragraph/paragraph';
import LogoRow from 'components/about/logo-row/logo-row';
import FAQ from 'components/about/faq/faq';
import CookiePieces from 'components/about/cookie-pieces/cookie-pieces';
import CookiePiecesV2 from 'components/about/cookie-pieces-v2/cookie-pieces-v2';

export default function AboutPage(pageProps) {
  const { faqData } = pageProps;
  return (
    <Layout {...pageProps}>
      <LogoRow />
      <LogoRow />
      <CookiePieces />
      <main>
        <Paragraph />
        <CookiePiecesV2 />
        <FAQ faqData={faqData} />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.ABOUT_US,
    isPreview: preview,
  });

  const faqData = await getFaqPage();

  return {
    props: {
      ...pageLoadData,
      faqData,
    },
  };
}
