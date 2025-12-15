import Layout from 'components/shared/Layout/Layout';
import { slugMap } from 'utils/constants';
import { getStoreLocations } from 'lib/contentful';
import { getPageLoadData } from 'lib/contentful';
import StoreLocations from 'components/StoreLocations/StoreLocations';

export default function Home(pageProps) {
  const { storeLocations } = pageProps;
  return (
    <Layout {...pageProps}>
      <main>
        <StoreLocations storeLocations={storeLocations} />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.STORE_LOCATIONS,
    isPreview: preview,
  });

  const storeLocations = await getStoreLocations();

  return {
    props: {
      ...pageLoadData,
      storeLocations,
    },
  };
}
