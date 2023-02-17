import { GET_NEWS_ARTICLES } from 'gql/queries';
import Banner from 'components/shared/banner';
import NewsGallery from 'components/media/news-gallery/news-gallery';
import { fetchGraphQL, filterNullFields, getPageLoadData } from 'lib/api';
import Layout from 'components/shared/layout/layout';
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
  const newsArticlesResponse = await fetchGraphQL({ query: GET_NEWS_ARTICLES });

  return {
    props: {
      newsArticles:
        filterNullFields(newsArticlesResponse.data.newsPostCollection.items) ||
        [],
      ...pageLoadData,
    },
  };
}
