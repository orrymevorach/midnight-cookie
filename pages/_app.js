import '../styles/globals.css';
import PageNotFound from './404';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useGoogleAnalytics } from 'lib/google-analytics-lib';
import GoogleAnalytics from 'components/shared/GoogleAnalytics/GoogleAnalytics';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const { isPagePublished, isPreview } = pageProps;
  useGoogleAnalytics();

  if (!isPagePublished && !isPreview) return <PageNotFound />;
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
      <script src="https://snapwidget.com/js/snapwidget.js"></script>
    </>
  );
}
