import Form from './form';
import Map from './map';
import styles from './contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <Form />
      </div>
      <div className={styles.column}>
        <Map />
      </div>
    </div>
  );
}
