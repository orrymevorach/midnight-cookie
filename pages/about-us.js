import Banner from 'components/shared/banner';
import styles from './page-container.module.scss';
import ImageGallery from 'components/about/image-gallery';
import Paragraph from 'components/about/paragraph/paragraph';
import { getPageLoadData } from 'pages';
import Layout from 'components/layout';
import { slugMap } from 'utils/constants';

export default function AboutUs(pageProps) {
  return (
    <Layout {...pageProps}>
      <main>
        <Banner isSmall heading="About Us" />
        <div className={styles.pageContainer}>
          <Paragraph />
          <ImageGallery />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageLoadData = await getPageLoadData({ slug: slugMap.ABOUT_US });
  return {
    props: {
      ...pageLoadData,
    },
  };
}
