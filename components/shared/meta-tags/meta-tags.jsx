import Head from 'next/head';

export default function MetaTags() {
  const title = 'Midnight Cookie';
  const description =
    "Midnight Cookie is Toronto's ONLY Late Night Cookie Delivery. MADE TO ORDER cookies #midnightcookie. NEW STORE FRONT COMING SOON!!";
  const url = 'https://midnightcookie.ca/';
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="url" content={url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="/wp-content/uploads/2021/10/midnight-cookie-favi-100x100.png"
        sizes="32x32"
      ></link>
      <link
        rel="icon"
        href="/wp-content/uploads/2021/10/midnight-cookie-favi-300x300.png"
        sizes="192x192"
      ></link>
      <link
        rel="apple-touch-icon"
        href="/wp-content/uploads/2021/10/midnight-cookie-favi-300x300.png"
      ></link>

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content="/wp-content/uploads/2021/10/midnight-cookie-favi-300x300.png"
      />
    </Head>
  );
}
