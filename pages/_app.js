import MaintenanceMode from 'components/maintenance-mode';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const isMaintenanceMode = pageProps.isMaintenanceMode;
  const isPagePublished = pageProps.isPagePublished;
  if (!isPagePublished) {
    return (
      <div>
        <h1>Page Not Found</h1>
      </div>
    );
  }
  if (isMaintenanceMode) return <MaintenanceMode />;
  return <Component {...pageProps} />;
}
