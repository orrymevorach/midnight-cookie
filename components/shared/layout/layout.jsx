import MetaTags from 'components/shared/meta-tags/meta-tags';
import Nav from 'components/shared/nav';
import Footer from 'components/shared/footer';

export default function Layout({ children, navData }) {
  return (
    <>
      <MetaTags />
      <Nav navData={navData} />
      {children}
      <Footer />
    </>
  );
}
