import { getNewsArticles } from 'lib/contentful';
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
  const newsArticles = await getNewsArticles();

  const articleData = newsArticles.find(
    article => article.slug === params.slug
  );

  return {
    props: {
      isPreview: !!preview,
      articleData,
    },
  };
}

export async function getStaticPaths() {
  const newsArticles = await getNewsArticles();

  return {
    paths: newsArticles.map(({ slug }) => `/media/${slug}`),
    fallback: true,
  };
}
