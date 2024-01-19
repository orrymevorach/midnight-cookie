import CookieGallery from 'components/home/cookie-gallery';
import NewsBanner from 'components/home/news-banner';
import Reviews from 'components/home/reviews';
import Layout from 'components/shared/layout';
import { slugMap } from 'utils/constants';
import { getCookieGallery } from 'lib/api';
import { getPageLoadData } from 'lib/api';
import HomeBanner from 'components/home/home-banner';
import Button from 'components/shared/button/button';
import HoursOfOperation from 'components/home/hours-of-operation/hours-of-operation';

export default function Home(pageProps) {
  const { galleries } = pageProps;
  return (
    <Layout {...pageProps}>
      <main>
        <HomeBanner />
        {galleries.map(({ title, items }) => (
          <CookieGallery title={title} items={items} />
        ))}
        <Button style={{ display: 'block', margin: '50px auto' }}>
          Order Now
        </Button>

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
        <NewsBanner />
        <HoursOfOperation />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.HOME,
    isPreview: preview,
  });

  const flavoursOfTheWeekGallery = await getCookieGallery({
    title: 'Flavours of the Week',
  });

  const consistentFlavoursGallery = await getCookieGallery({
    title: 'Repeating Flavours',
  });

  const galleries = [consistentFlavoursGallery, flavoursOfTheWeekGallery];

  return {
    props: {
      galleries,
      ...pageLoadData,
    },
  };
}
