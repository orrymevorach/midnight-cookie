import { client } from 'gql/apollo-config';
import { GET_MENU_ITEMS, GET_NEWS_ARTICLES } from 'gql/queries-contentful';
import Footer from 'components/shared/footer';
import Nav from 'components/shared/nav';
import Banner from 'components/shared/banner';
import NewsGallery from 'components/media/news-gallery/news-gallery';
import MetaTags from 'components/shared/meta-tags/meta-tags';

export default function Media({ navData, newsArticles }) {
  return (
    <>
      <MetaTags />
      <Nav navData={navData} />
      <main>
        <Banner isSmall heading="Media" />
        <NewsGallery newsArticles={newsArticles} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const navResponse = await client.query({
    query: GET_MENU_ITEMS,
  });
  const newsArticlesResponse = await client.query({
    query: GET_NEWS_ARTICLES,
  });
  return {
    props: {
      navData: navResponse.data.menu.menuItemsCollection.items,
      newsArticles: newsArticlesResponse.data.newsPostCollection.items,
    },
  };
}
