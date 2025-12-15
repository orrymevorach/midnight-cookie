import Layout from 'components/shared/Layout/Layout';
import { getPageLoadData } from 'lib/contentful';
import { slugMap } from 'utils/constants';
import Paragraph from 'components/About/paragraph/paragraph';
import LogoRow from 'components/About/logo-row/logo-row';
import CookiePieces from 'components/About/cookie-pieces/cookie-pieces';
import CookiePiecesV2 from 'components/About/cookie-pieces-v2/cookie-pieces-v2';
import { useWindowSize } from 'hooks';

export default function AboutPage(pageProps) {
  const { isMobile } = useWindowSize();
  return (
    <Layout {...pageProps}>
      <LogoRow />
      <LogoRow />
      {isMobile && <LogoRow />}
      <CookiePieces />
      <main>
        <Paragraph />
        <CookiePiecesV2 />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.ABOUT_US,
    isPreview: preview,
  });

  return {
    props: {
      ...pageLoadData,
    },
  };
}
