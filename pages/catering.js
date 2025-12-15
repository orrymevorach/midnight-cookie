import Layout from 'components/shared/Layout/Layout';
import { slugMap } from 'utils/constants';
import { getPageLoadData } from 'lib/contentful';
import Catering from 'components/Catering/Catering';

export default function Home(pageProps) {
  return (
    <Layout {...pageProps}>
      <main>
        <Catering />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.CATERING,
    isPreview: preview,
  });

  return {
    props: {
      ...pageLoadData,
    },
  };
}
