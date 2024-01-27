import MetaTags from 'components/shared/meta-tags/meta-tags';
import Nav from 'components/shared/nav';
import Footer from 'components/shared/footer';

export default function Layout({ children, navData, animateNav }) {
  return (
    <>
      <MetaTags />
      <Nav navData={navData} animateNav={animateNav} />
      {children}
      <Footer />
    </>
  );
}
