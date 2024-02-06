import MaintenanceMode from 'components/shared/maintenance-mode';
import '../styles/globals.css';
import PageNotFound from './404';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const { isMaintenanceMode, isPagePublished, isPreview } = pageProps;
  if (!isPagePublished && !isPreview) return <PageNotFound />;
  if (isMaintenanceMode) return <MaintenanceMode />;
  return (
    <>
      <Component {...pageProps} />
      <script src="https://snapwidget.com/js/snapwidget.js"></script>
    </>
  );
}
