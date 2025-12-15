import { slugMap } from 'utils/constants';
import { getPageLoadData } from 'lib/contentful';

export default function Home(pageProps) {
  return <main></main>;
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.CATERING,
    isPreview: preview,
  });

  return {
    props: {
      ...pageLoadData,
    },
  };
}
