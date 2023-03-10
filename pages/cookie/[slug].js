import { fetchGraphQL, filterNullFields } from 'lib/api';
import { GET_COOKIE } from 'gql/queries';
import CookieTile from 'components/home/cookie-gallery/cookie-tile/cookie-tile';

export default function CookiePage({ cookieData }) {
  return (
    <div style={{ width: '500px' }}>
      <CookieTile cookieData={cookieData} />;
    </div>
  );
}

export async function getStaticProps({ preview = false, params }) {
  // this fixes the deployment, since there are no params on build time
  if (params.slug === 'undefined')
    return {
      props: { cookieData: [] },
    };
  const cookieResponse = await fetchGraphQL({
    query: GET_COOKIE,
    variables: { slug: params.slug },
  });
  const cookieData = cookieResponse?.data?.cookieCollection?.items[0];
  return {
    props: {
      isPreview: !!preview,
      cookieData,
    },
  };
}

export async function getStaticPaths() {
  const cookieResponse = await fetchGraphQL({
    query: GET_COOKIE,
  });

  return {
    paths: cookieResponse.data.cookieCollection.items.map(
      ({ slug }) => `/cookie/${slug}`
    ),
    fallback: true,
  };
}
