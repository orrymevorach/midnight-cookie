import Banner from '@components/banner';
import CookieGallery from '@components/cookie-gallery';
import { client } from '@gql/apollo-config';
import { GET_COOKIES, GET_MENU_ITEMS } from '@gql/queries';
import NewsBanner from '@components/news-banner';
import Footer from '@components/footer';
import Nav from '@components/nav';
import Reviews from '@components/reviews';
import MetaTags from '@components/meta-tags';

export default function Home({ cookieData, navData }) {
  return (
    <>
      <MetaTags />
      <main>
        <Nav navData={navData} />
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
        <Footer />
      </main>
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
