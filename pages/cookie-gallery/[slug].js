import { fetchGraphQL, filterNullFields } from 'lib/api';
import { GET_COOKIES } from 'gql/queries';
import CookieGallery from 'components/home/cookie-gallery/cookie-gallery';

export default function CookiePage(pageProps) {
  return <CookieGallery {...pageProps} />;
}

export async function getStaticProps({ preview = false, params }) {
  // this fixes the deployment, since there are no params on build time
  if (params.slug === 'undefined')
    return {
      props: { cookieData: [] },
    };
  const cookieDataResponse = await fetchGraphQL({
    query: GET_COOKIES,
    variables: { slug: params.slug },
  });

  const cookieData =
    cookieDataResponse?.data?.cookieGalleryCollection?.items &&
    cookieDataResponse?.data?.cookieGalleryCollection?.items.length
      ? filterNullFields(
          cookieDataResponse.data.cookieGalleryCollection.items[0]
            .cookiesCollection.items
        )
      : [];

  return {
    props: {
      isPreview: !!preview,
      cookieData,
    },
  };
}

export async function getStaticPaths() {
  const cookieDataResponse = await fetchGraphQL({
    query: GET_COOKIES,
  });
  const cookieData = filterNullFields(
    cookieDataResponse.data.cookieGalleryCollection.items
  );

  return {
    paths: cookieData.map(({ slug }) => `/cookie-gallery/${slug}`),
    fallback: true,
  };
}
