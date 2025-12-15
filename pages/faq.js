import Layout from 'components/shared/Layout/Layout';
import { getFaqPage, getPageLoadData } from 'lib/contentful';
import { slugMap } from 'utils/constants';
import FAQ from 'components/About/Faq/Faq';

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
