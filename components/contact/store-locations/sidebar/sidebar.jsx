import styles from './sidebar.module.scss';

export default function Sidebar({ storeLocations, setCurrentIndex }) {
  return (
    <div className={styles.left}>
      <p className={styles.title}>Toronto</p>
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
