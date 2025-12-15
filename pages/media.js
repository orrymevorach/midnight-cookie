import Banner from 'components/shared/Banner/Banner';
import NewsGallery from 'components/Media/news-gallery/news-gallery';
import { getNewsArticles, getPageLoadData } from 'lib/contentful';
import Layout from 'components/shared/Layout/Layout';
import { slugMap } from 'utils/constants';

export default function Media(pageProps) {
  const { newsArticles } = pageProps;
  return (
    <Layout {...pageProps}>
      <main>
        <Banner isSmall heading="Media" />
        <NewsGallery newsArticles={newsArticles} />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.MEDIA,
    isPreview: preview,
  });
  const newsArticles = await getNewsArticles();

  return {
    props: {
      newsArticles: newsArticles,
      ...pageLoadData,
    },
  };
}
