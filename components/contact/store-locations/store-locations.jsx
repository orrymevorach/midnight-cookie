import styles from './store-locations.module.scss';

const storeLocations = [
  {
    name: 'Bloor',
    address: ['363 1/2 Clinton St.', 'Toronto, ON M6G 2Z1', '(647)348-9852'],
  },
  {
    name: 'Midtown',
    address: ['3 Manor Rd.', 'Toronto, ON M4S 1P8'],
  },
];

const StoreLocation = ({ name, address }) => {
  return (
    <div className={styles.storeLocationContainer}>
      <p className={styles.locationTitle}>Midnight Cookie</p>
      <p className={styles.locationTitle}>{name}</p>
      <div className={styles.addressContainer}>
        {address.map(line => (
          <p key={line} className={styles.address}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default function StoreLocations() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Store Locations</p>
      <div className={styles.locationsContainer}>
        {storeLocations.map(storeLocation => (
          <StoreLocation {...storeLocation} />
        ))}
      </div>
    </div>
  );
}
