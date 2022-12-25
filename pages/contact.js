// import { client } from 'gql/apollo-config';
// import { GET_MENU_ITEMS } from 'gql/queries';
import Footer from 'components/shared/footer';
import Nav from 'components/shared/nav';
import Banner from 'components/shared/banner';
import MetaTags from 'components/shared/meta-tags/meta-tags';
import Form from 'components/contact/form';
import Map from 'components/contact/map';
import styles from './page-container.module.scss';
import { navData } from 'mocks/navData';

export default function Contact({ navData }) {
  return (
    <>
      <MetaTags />
      <Nav navData={navData} />
      <main>
        <Banner isSmall heading="Contact" />
        <div className={styles.pageContainer}>
          <Map />
          <Form />
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // const navResponse = await client.query({
  //   query: GET_MENU_ITEMS,
  // });
  return {
    props: {
      // navData: navResponse.data.menu.menuItems.nodes,
      navData,
    },
  };
}
