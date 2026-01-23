import { slugMap } from 'utils/constants';
import {
  getCateringOptions,
  getCateringPricingOptionsData,
  getPageLoadData,
} from 'lib/contentful';
import Catering from 'components/Catering/Catering';
import Layout from 'components/shared/Layout/Layout';

export default function Home(pageProps) {
  const { cateringOptions, cateringPricingOptionsData } = pageProps;
  return (
    <Layout {...pageProps}>
      <main>
        <Catering
          cateringOptions={cateringOptions}
          cateringPricingOptionsData={cateringPricingOptionsData}
        />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.CATERING,
    isPreview: preview,
  });

  const cateringOptions = await getCateringOptions();
  const cateringPricingOptionsData = await getCateringPricingOptionsData();

  return {
    props: {
      ...pageLoadData,
      cateringOptions,
      cateringPricingOptionsData,
    },
  };
}
