import Head from 'next/head';
import HomeBanner from '@components/home-banner';
import CookieGallery from '@components/cookie-gallery';
import { client } from '@gql/apollo-config';
import { GET_COOKIES } from '@gql/queries';
import NewsBanner from '@components/news-banner';

export default function Home({ cookieData }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <title>Midnight Cookie</title>
        <meta
          name="description"
          content="Midnight Cookie is Toronto's ONLY Late Night Cookie Delivery. MADE TO ORDER cookies #midnightcookie. NEW STORE FRONT COMING SOON!!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.midnightcookie.ca/wp-content/uploads/2021/10/midnight-cookie-favi-100x100.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          href="https://www.midnightcookie.ca/wp-content/uploads/2021/10/midnight-cookie-favi-300x300.png"
          sizes="192x192"
        ></link>
        <link
          rel="apple-touch-icon"
          href="https://www.midnightcookie.ca/wp-content/uploads/2021/10/midnight-cookie-favi-300x300.png"
        ></link>
      </Head>
      <main>
        <HomeBanner />
        <CookieGallery cookieData={cookieData} />
        <NewsBanner />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GET_COOKIES,
  });
  return {
    props: {
      cookieData: response.data.cookies.nodes,
    },
  };
}
