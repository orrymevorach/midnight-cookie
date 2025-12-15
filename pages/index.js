import CookieGallery from 'components/Home/cookie-gallery/cookie-gallery';
import NewsBanner from 'components/Home/news-banner/news-banner';
import Layout from 'components/shared/Layout/Layout';
import { COOKIE_GALLERIES, slugMap } from 'utils/constants';
import {
  getCarouselItems,
  getCookieGallery,
  getShopGallery,
  getVideoDuration,
} from 'lib/contentful';
import { getPageLoadData } from 'lib/contentful';
import HoursOfOperation from 'components/Home/hours-of-operation/hours-of-operation';
import Newsletter from 'components/Home/Newsletter/Newsletter';
import CookieGalleryV2 from 'components/Home/cookie-gallery-v2/cookie-gallery-v2';
import Carousel from 'components/Home/Carousel/Carousel';
import GiftCards from 'components/Home/gift-cards/gift-cards';
import SlidingCarousel from 'components/shared/SlidingCarousel/SlidingCarousel';

export default function Home(pageProps) {
  const {
    featuredFlavoursGallery,
    classicDoughGallery,
    carouselItems,
    shopGallery,
  } = pageProps;
  return (
    <Layout {...pageProps} animateNav>
      <main>
        <Carousel media={carouselItems} />

        <CookieGallery {...featuredFlavoursGallery} />

        <CookieGalleryV2 {...classicDoughGallery} />
        <SlidingCarousel products={shopGallery} />
        <GiftCards />

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
    carouselItems.map(async item => {
      const video = item.video;
      if (!video) {
        return item;
      }

      // const duration = await getVideoDuration(video);
      // const mobileDuration = item.mobileMedia
      //   ? await getVideoDuration(item.mobileMedia)
      //   : null;

      // return {
      //   ...item,
      //   duration: duration ? parseFloat(duration) : null,
      //   mobileDuration: mobileDuration ? parseFloat(mobileDuration) : null,
      // };
    })
  );

  const shopGallery = await getShopGallery();

  return {
    props: {
      featuredFlavoursGallery,
      classicDoughGallery,
      carouselItems: { items: carouselItemsWithVideoDuration },
      shopGallery,
      ...pageLoadData,
    },
  };
}
