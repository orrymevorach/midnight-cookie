import MaintenanceMode from 'components/maintenance-mode';
import '../styles/globals.css';
import PageNotFound from './404';

export default function App({ Component, pageProps }) {
  const isMaintenanceMode = pageProps.isMaintenanceMode;
  const isPagePublished = pageProps.isPagePublished;
  if (!isPagePublished) return <PageNotFound />;
  if (isMaintenanceMode) return <MaintenanceMode />;
  return <Component {...pageProps} />;
}
