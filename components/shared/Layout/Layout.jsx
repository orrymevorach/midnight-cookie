import MetaTags from 'components/shared/MetaTags/MetaTags';
import Nav from 'components/shared/Nav/Nav';
import Footer from 'components/shared/Footer/Footer';

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
