import { fetchGraphQL, filterNullFields } from 'lib/contentful';
import { GET_NEWS_ARTICLES } from 'gql/queries';
import NewsArticle from 'components/media/news-gallery/news-article';

export default function CookiePage({ articleData }) {
  return (
    <div style={{ width: '500px' }}>
      <NewsArticle {...articleData} />;
    </div>
  );
}

export async function getStaticProps({ preview = false, params }) {
  // this fixes the deployment, since there are no params on build time
  if (params.slug === 'undefined')
    return {
      props: { cookieData: [] },
    };
  const articleResponse = await fetchGraphQL({
    query: GET_NEWS_ARTICLES,
    variables: { slug: params.slug },
  });

  const articleData = articleResponse.data.newsPostCollection.items[0];

  return {
    props: {
      isPreview: !!preview,
      articleData,
    },
  };
}

export async function getStaticPaths() {
  const articlesResponse = await fetchGraphQL({
    query: GET_NEWS_ARTICLES,
  });
  const newsArticles = filterNullFields(
    articlesResponse.data.newsPostCollection.items
  );

  return {
    paths: newsArticles.map(({ slug }) => `/media/${slug}`),
    fallback: true,
  };
}
