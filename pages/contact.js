import Banner from 'components/shared/banner';
import Form from 'components/contact/form';
import Map from 'components/contact/map';
import styles from './page-container.module.scss';
import { getPageLoadData } from 'pages';
import Layout from 'components/layout';
import { slugMap } from 'utils/constants';

export default function Contact(pageProps) {
  return (
    <Layout {...pageProps}>
      <main>
        <Banner isSmall heading="Contact" />
        <div className={styles.pageContainer}>
          <Map />
          <Form />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageLoadData = await getPageLoadData({ slug: slugMap.CONTACT });
  return {
    props: {
      ...pageLoadData,
    },
  };
}
