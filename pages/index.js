import { client } from 'gql/apollo-config';
import { GET_COOKIES, GET_MENU_ITEMS } from 'gql/queries-contentful';
import Banner from 'components/shared/banner';
import CookieGallery from 'components/home/cookie-gallery';
import NewsBanner from 'components/home/news-banner';
import Reviews from 'components/home/reviews';
import { GET_MAINTENANCE_MODE_FEATURE_FLAG } from 'gql/queries';
import Layout from 'components/layout';

export const getPageLoadData = async () => {
  const navResponse = await client.query({
    query: GET_MENU_ITEMS,
  });
  const featureFlagResponse = await client.query({
    query: GET_MAINTENANCE_MODE_FEATURE_FLAG,
    fetchPolicy: 'no-cache',
  });
  return {
    navData: navResponse.data.menu.menuItemsCollection.items,
    isMaintenanceMode:
      featureFlagResponse.data.featureFlagCollection.items[0].value,
  };
};

export default function Home(pageProps) {
  const { cookieData = [] } = pageProps;
  return (
    <Layout {...pageProps}>
      <main>
        <Banner heading="Our new storefront is coming soon" hasFade>
          <p>Check back here for updates...</p>
          <p>
            Orders will be paused until reopening. Please message us for any
            special requests.
          </p>
        </Banner>
        <CookieGallery cookieData={cookieData} />
        <NewsBanner />
        <Reviews />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const pageLoadData = await getPageLoadData();
  const cookieDataResponse = await client.query({
    query: GET_COOKIES,
  });

  return {
    props: {
      cookieData: cookieDataResponse.data.cookieCollection.items,
      ...pageLoadData,
    },
  };
}
