import Layout from 'components/shared/layout';
import { getFaqPage, getPageLoadData } from 'lib/api';
import { slugMap } from 'utils/constants';
import FAQ from 'components/about/faq/faq';

export default function AboutPage(pageProps) {
  const { faqData } = pageProps;
  return (
    <Layout {...pageProps}>
      <main>
        <FAQ faqData={faqData} />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.FAQ,
    isPreview: preview,
  });

  const faqData = await getFaqPage();

  return {
    props: {
      ...pageLoadData,
      faqData,
    },
  };
}
