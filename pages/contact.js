import Banner from 'components/shared/banner';
import Form from 'components/contact/form';
import Map from 'components/contact/map';
import styles from './page-container.module.scss';
import { getPageLoadData } from 'pages';
import Layout from 'components/layout';

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

export async function getServerSideProps() {
  const pageLoadData = await getPageLoadData();
  return {
    props: {
      ...pageLoadData,
    },
  };
}
