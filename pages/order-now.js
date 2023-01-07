import { getPageLoadData } from 'pages';
import Layout from 'components/layout/layout';
import { slugMap } from 'utils/constants';

export default function OrderNow(pageProps) {
  return (
    <Layout {...pageProps}>
      <main>
        <iframe
          src="https://order.tapmango.com/merchant/dfb63169-3067-4b49-89f3-09deeb3eba9b/order/catalog"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageLoadData = await getPageLoadData({ slug: slugMap.ORDER_NOW });
  return {
    props: {
      ...pageLoadData,
    },
  };
}
