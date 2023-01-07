import { client } from 'gql/apollo-config';
import { GET_NEWS_ARTICLES } from 'gql/queries';
import Banner from 'components/shared/banner';
import NewsGallery from 'components/media/news-gallery/news-gallery';
import { getPageLoadData } from 'pages';
import Layout from 'components/layout/layout';
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

export async function getStaticProps() {
  const pageLoadData = await getPageLoadData({ slug: slugMap.MEDIA });
  const newsArticlesResponse = await client.query({
    query: GET_NEWS_ARTICLES,
  });

  return {
    props: {
      newsArticles: newsArticlesResponse.data.newsPostCollection.items,
      ...pageLoadData,
    },
  };
}
