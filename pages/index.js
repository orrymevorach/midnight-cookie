import Head from 'next/head';
import { client } from '@gql/apollo-config';
import { GET_POSTS } from '@gql/queries';
import HomeBanner from '@components/home-banner';

export default function Home() {
  const posts = client
    .query({
      query: GET_POSTS,
    })
    .then(posts => {
      console.log('posts, cookies, menuItems', posts.data.posts);
    });

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
      </main>
    </>
  );
}
