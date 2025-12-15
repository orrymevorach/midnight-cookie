import styles from './Sidebar.module.scss';

export default function Sidebar({ storeLocations, setCurrentIndex }) {
  return (
    <div className={styles.left}>
      <h1 className={styles.title}>
        Toronto <br /> Store <br /> Locations
      </h1>
      {storeLocations.map(({ storeName }, index) => (
        <div key={storeName}>
          <button
            className={styles.storeName}
            onClick={() => setCurrentIndex(index)}
          >
            {storeName}
          </button>
        </div>
      ))}
    </div>
  );
}
