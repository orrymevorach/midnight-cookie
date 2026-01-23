import styles from './Sidebar.module.scss';

const FormattedTitle = ({ title }) => {
  return (
    <h1 className={styles.title}>
      {title.split(' ').map(word => {
        return (
          <span key={word}>
            {word}
            <br />
          </span>
        );
      })}
    </h1>
  );
};

export default function Sidebar({
  data,
  setCurrentIndex,
  title = 'Toronto Store Locations',
}) {
  return (
    <div className={styles.left}>
      <FormattedTitle title={title} />
      {data.map(({ name }, index) => (
        <div key={name}>
          <button
            className={styles.storeName}
            onClick={() => setCurrentIndex(index)}
          >
            {name}
          </button>
        </div>
      ))}
    </div>
  );
}
