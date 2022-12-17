import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright &copy; 2022 <span>Midnight Cookie</span>. All Rights Reserved
      </p>
    </footer>
  );
}
