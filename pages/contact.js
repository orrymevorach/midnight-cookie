import { getPageLoadData } from 'lib/api';
import Layout from 'components/shared/layout';
import { slugMap } from 'utils/constants';
import Contact from 'components/contact';

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
