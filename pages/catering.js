import { slugMap } from 'utils/constants';
import {
  getCateringOptions,
  getCateringPricingOptions,
  getPageLoadData,
} from 'lib/contentful';
import Catering from 'components/Catering/Catering';
import Layout from 'components/shared/Layout/Layout';

export default function Home(pageProps) {
  const { cateringOptions, cateringPricingOptions } = pageProps;
  const formattedOptions = cateringOptions.map(option => ({
    ...option,
    name: option.cateringOption,
  }));
  return (
    <Layout {...pageProps}>
      <main>
        <Catering
          cateringOptions={formattedOptions}
          cateringPricingOptions={cateringPricingOptions}
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
  const cateringPricingOptions = await getCateringPricingOptions();

  return {
    props: {
      ...pageLoadData,
      cateringOptions,
      cateringPricingOptions,
    },
  };
}
