import { GET_COOKIES } from 'gql/queries';
import Banner from 'components/shared/banner';
import CookieGallery from 'components/home/cookie-gallery';
import NewsBanner from 'components/home/news-banner';
import Reviews from 'components/home/reviews';
import Layout from 'components/shared/layout';
import { slugMap } from 'utils/constants';
import { fetchGraphQL, filterNullFields } from 'lib/api';
import { getPageLoadData } from 'lib/api';
import HomeBanner from 'components/home/home-banner';

export default function Home(pageProps) {
  const { cookieData = [] } = pageProps;
  return (
    <Layout {...pageProps}>
      <main>
        <HomeBanner />
        <CookieGallery cookieData={cookieData} />
        <iframe
          src="https://snapwidget.com/embed/1041991"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{
            border: 'none',
            width: '100%',
            overflow: 'hidden',
            height: '800px',
          }}
        ></iframe>
        <NewsBanner />
        <Reviews />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.HOME,
    isPreview: preview,
  });
  const cookieDataResponse = await fetchGraphQL({
    query: GET_COOKIES,
    variables: {
      slug: 'home-page-gallery',
    },
  });
  return {
    props: {
      cookieData:
        filterNullFields(
          cookieDataResponse.data.cookieGalleryCollection.items[0]
            .cookiesCollection.items
        ) || [],

      ...pageLoadData,
    },
  };
}
