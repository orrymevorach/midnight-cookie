import CookieGallery from 'components/home/cookie-gallery';
import NewsBanner from 'components/home/news-banner';
import Layout from 'components/shared/layout';
import { COOKIE_GALLERIES, slugMap } from 'utils/constants';
import { getCookieGallery } from 'lib/api';
import { getPageLoadData } from 'lib/api';
import HomeBanner from 'components/home/home-banner';
import Button from 'components/shared/button/button';
import HoursOfOperation from 'components/home/hours-of-operation/hours-of-operation';
import Newsletter from 'components/home/newsletter/newsletter';
import CookieGalleryV2 from 'components/home/cookie-gallery-v2/cookie-gallery-v2';

export default function Home(pageProps) {
  const { featuredFlavoursGallery, classicDoughGallery } = pageProps;
  return (
    <Layout {...pageProps} animateNav>
      <main>
        <HomeBanner />

        <CookieGallery {...featuredFlavoursGallery} />

        <CookieGalleryV2 {...classicDoughGallery} />
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Button
            style={{ display: 'inline-block', margin: '50px auto 220px' }}
            href="https://order.tapmango.com/merchant/dfb63169-3067-4b49-89f3-09deeb3eba9b/order/catalog"
          >
            Order Now
          </Button>
        </div>
        <NewsBanner />
        <HoursOfOperation />
        <Newsletter />
        {/* <iframe
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
        ></iframe> */}
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.HOME,
    isPreview: preview,
  });

  const featuredFlavoursGallery = await getCookieGallery({
    title: COOKIE_GALLERIES.FEATURED_FLAVOURS,
  });

  const classicDoughGallery = await getCookieGallery({
    title: COOKIE_GALLERIES.CLASSIC_DOUGH,
  });

  return {
    props: {
      featuredFlavoursGallery,
      classicDoughGallery,
      ...pageLoadData,
    },
  };
}
