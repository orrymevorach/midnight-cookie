import { getPageLoadData } from 'lib/contentful';
import Layout from 'components/shared/layout/layout';
import { slugMap } from 'utils/constants';
import OrderIframe from 'components/order-now/order-iframe';

export default function OrderNow(pageProps) {
  return (
    <Layout {...pageProps}>
      <main>
        <OrderIframe />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageLoadData = await getPageLoadData({
    slug: slugMap.ORDER_NOW,
    isPreview: preview,
  });
  return {
    props: {
      ...pageLoadData,
    },
  };
}
