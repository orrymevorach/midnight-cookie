import MaintenanceMode from 'components/maintenance-mode';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const isMaintenanceMode = pageProps.isMaintenanceMode;
  return (
    <>
      {isMaintenanceMode ? <MaintenanceMode /> : <Component {...pageProps} />}
    </>
  );
}
