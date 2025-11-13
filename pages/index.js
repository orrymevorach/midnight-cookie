import CookieGallery from 'components/home/cookie-gallery';
import NewsBanner from 'components/home/news-banner';
import Layout from 'components/shared/layout';
import { COOKIE_GALLERIES, slugMap } from 'utils/constants';
import {
  getCarouselItems,
  getCookieGallery,
  getVideoDuration,
} from 'lib/contentful';
import { getPageLoadData } from 'lib/contentful';
import HoursOfOperation from 'components/home/hours-of-operation/hours-of-operation';
import Newsletter from 'components/home/newsletter/newsletter';
import CookieGalleryV2 from 'components/home/cookie-gallery-v2/cookie-gallery-v2';
import Carousel from 'components/home/carousel/carousel';

export default function Home(pageProps) {
  const { featuredFlavoursGallery, classicDoughGallery, carouselItems } =
    pageProps;
  return (
    <Layout {...pageProps} animateNav>
      <main>
        <Carousel media={carouselItems} />

        <CookieGallery {...featuredFlavoursGallery} />

        <CookieGalleryV2 {...classicDoughGallery} />

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

  const carouselItems = await getCarouselItems({
    title: 'Home Page Carousel',
  });

  const carouselItemsWithVideoDuration = await Promise.all(
    carouselItems.items.map(async item => {
      const video = item.video;
      if (!video) {
        return item;
      }

      const duration = await getVideoDuration(video);
      const mobileDuration = item.mobileMedia
        ? await getVideoDuration(item.mobileMedia)
        : null;

      return {
        ...item,
        duration: duration ? parseFloat(duration) : null,
        mobileDuration: mobileDuration ? parseFloat(mobileDuration) : null,
      };
    })
  );

  return {
    props: {
      featuredFlavoursGallery,
      classicDoughGallery,
      carouselItems: { items: carouselItemsWithVideoDuration },
      ...pageLoadData,
    },
  };
}
