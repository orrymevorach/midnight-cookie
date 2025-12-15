import { getPageLoadData } from 'lib/contentful';
import Layout from 'components/shared/Layout/Layout';
import { slugMap } from 'utils/constants';
import Contact from 'components/Contact/Contact';

export default function ContactPage(pageProps) {
  return (
    <Layout {...pageProps}>
      <main>
        <Contact />
      </main>
    </Layout>
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
