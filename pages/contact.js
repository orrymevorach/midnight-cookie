import Banner from 'components/shared/banner';
import styles from './page-container.module.scss';
import { getPageLoadData } from 'lib/api';
import Layout from 'components/shared/layout';
import { slugMap } from 'utils/constants';
import Contact from 'components/contact';

export default function ContactPage(pageProps) {
  return (
    <Layout {...pageProps}>
      <main>
        <Banner isSmall heading="Contact" />
        <div className={styles.pageContainer}>
          <Contact />
        </div>
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
