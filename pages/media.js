import { client } from 'gql/apollo-config';
import { GET_MENU_ITEMS, GET_NEWS_ARTICLES } from 'gql/queries';
import Footer from 'components/footer';
import Nav from 'components/nav';
import Banner from 'components/banner';
import NewsGallery from 'components/news-gallery/news-gallery';
import MetaTags from 'components/meta-tags/meta-tags';

export default function Home({ navData, newsArticles }) {
  return (
    <>
      <MetaTags />
      <main>
        <Nav navData={navData} />
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
      navData: navResponse.data.menu.menuItems.nodes,
      newsArticles: newsArticlesResponse.data.posts.nodes,
    },
  };
}
