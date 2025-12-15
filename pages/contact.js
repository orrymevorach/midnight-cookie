import { getPageLoadData } from 'lib/contentful';
import { slugMap } from 'utils/constants';
import Contact from 'components/Contact/Contact';

export default function ContactPage(pageProps) {
  return (
    <main>
      <Contact />
    </main>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.CONTACT,
    isPreview: preview,
  });
  return {
    props: {
      ...pageLoadData,
    },
  };
}
