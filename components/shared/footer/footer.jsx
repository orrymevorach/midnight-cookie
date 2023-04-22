import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.address}> 3 Manor Rd E, Toronto, ON M4S 1P8</p>
      <p>
        Copyright &copy; 2022 <span>Midnight Cookie</span>. All Rights Reserved
      </p>
    </footer>
  );
}
