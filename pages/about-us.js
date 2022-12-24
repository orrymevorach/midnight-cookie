import { client } from 'gql/apollo-config';
import { GET_MENU_ITEMS } from 'gql/queries';
import Footer from 'components/shared/footer';
import Nav from 'components/shared/nav';
import Banner from 'components/shared/banner';
import MetaTags from 'components/shared/meta-tags/meta-tags';
import styles from './page-container.module.scss';
import ImageGallery from 'components/about/image-gallery';
import Paragraph from 'components/about/paragraph/paragraph';

export default function AboutUs({ navData }) {
  return (
    <>
      <MetaTags />
      <Nav navData={navData} />
      <main>
        <Banner isSmall heading="About Us" />
        <div className={styles.pageContainer}>
          <Paragraph />
          <ImageGallery />
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const navResponse = await client.query({
    query: GET_MENU_ITEMS,
  });
  return {
    props: {
      navData: navResponse.data.menu.menuItems.nodes,
    },
  };
}
