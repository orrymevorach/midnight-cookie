import { client } from 'gql/apollo-config';
import { GET_COOKIES, GET_MENU_ITEMS } from 'gql/queries';
import Banner from 'components/shared/banner';
import CookieGallery from 'components/home/cookie-gallery';
import NewsBanner from 'components/home/news-banner';
import Footer from 'components/shared/footer';
import Nav from 'components/shared/nav';
import Reviews from 'components/home/reviews';
import MetaTags from 'components/shared/meta-tags';

export default function Home({ cookieData, navData }) {
  return (
    <>
      <MetaTags />
      <Nav navData={navData} />
      <main>
        <Banner heading="Our new storefront is coming soon" hasFade>
          <p>Check back here for updates...</p>
          <p>
            Orders will be paused until reopening. Please message us for any
            special requests.
          </p>
        </Banner>
        <CookieGallery cookieData={cookieData} />
        <NewsBanner />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GET_COOKIES,
  });
  const navResponse = await client.query({
    query: GET_MENU_ITEMS,
  });
  return {
    props: {
      cookieData: response.data.cookies.nodes,
      navData: navResponse.data.menu.menuItems.nodes,
    },
  };
}
