import Layout from 'components/shared/Layout/Layout';
import { slugMap } from 'utils/constants';
import { getStoreLocations } from 'lib/contentful';
import { getPageLoadData } from 'lib/contentful';
import ImageGridWithNavigation from 'components/shared/ImageGridWithNavigation/ImageGridWithNavigation';
import { hoursOfOperation } from 'components/Home/hours-of-operation/hours-of-operation';

export default function Home(pageProps) {
  const { storeLocations } = pageProps;
  const formattedLocations = storeLocations.map(location => ({
    ...location,
    name: location.storeName,
  }));

  return (
    <Layout {...pageProps}>
      <main>
        <ImageGridWithNavigation
          data={formattedLocations}
          hoursOfOperation={hoursOfOperation}
        />
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
