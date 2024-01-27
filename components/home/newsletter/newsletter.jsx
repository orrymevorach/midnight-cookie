import styles from './newsletter.module.scss';

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Sign up for our newsletter</p>
      <form action="#" className={styles.formContainer}>
        <input placeholder="EMAIL" type="email" className={styles.input} />
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
