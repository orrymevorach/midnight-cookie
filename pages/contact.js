import { client } from 'gql/apollo-config';
import { GET_MENU_ITEMS } from 'gql/queries';
import Footer from 'components/footer';
import Nav from 'components/nav';
import Banner from 'components/banner';
import MetaTags from 'components/meta-tags/meta-tags';
import Form from 'components/form';
import Map from 'components/map';
import styles from './contact.module.scss';

export default function Home({ navData }) {
  return (
    <>
      <MetaTags />
      <Nav navData={navData} />
      <main>
        <Banner isSmall heading="Contact" />
        <div className={styles.contactContainer}>
          <Map />
          <Form />
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
