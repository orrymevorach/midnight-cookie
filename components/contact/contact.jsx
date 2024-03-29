import Form from './form';
import Map from './map';
import styles from './contact.module.scss';
import clsx from 'clsx';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <Form />
      </div>
      <div className={clsx(styles.column, styles.right)}>
        <Map />
      </div>
    </div>
  );
}
