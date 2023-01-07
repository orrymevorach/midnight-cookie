import { client } from 'gql/apollo-config';
import {
  GET_COOKIES,
  GET_MENU_ITEMS,
  GET_MAINTENANCE_MODE_FEATURE_FLAG,
  GET_IS_PAGE_PUBLISHED,
} from 'gql/queries';
import Banner from 'components/shared/banner';
import CookieGallery from 'components/home/cookie-gallery';
import NewsBanner from 'components/home/news-banner';
import Reviews from 'components/home/reviews';
import Layout from 'components/layout';
import { slugMap } from 'utils/constants';

export const getPageLoadData = async ({ slug }) => {
  const navResponse = await client.query({
    query: GET_MENU_ITEMS,
    fetchPolicy: 'no-cache',
  });

  const featureFlagResponse = await client.query({
    query: GET_MAINTENANCE_MODE_FEATURE_FLAG,
    fetchPolicy: 'no-cache',
  });

  const isPagePublished = await client.query({
    query: GET_IS_PAGE_PUBLISHED,
    fetchPolicy: 'no-cache',
    variables: { slug },
  });

  return {
    navData: navResponse?.data?.menu?.pageCollection?.items || [],
    isMaintenanceMode:
      featureFlagResponse?.data?.featureFlagCollection?.items[0]?.value ||
      false,
    isPagePublished:
      !!isPagePublished?.data?.pageCollection?.items?.length || false,
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

export async function getStaticProps() {
  const pageLoadData = await getPageLoadData({ slug: slugMap.HOME });
  const cookieDataResponse = await client.query({
    query: GET_COOKIES,
  });
  return {
    props: {
      cookieData:
        cookieDataResponse.data.cookieGalleryCollection.items[0]
          .cookiesCollection.items,

      ...pageLoadData,
    },
  };
}
