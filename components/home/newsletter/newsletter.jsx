import styles from './newsletter.module.scss';

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <p className={styles.label}>
        <a
          href="https://customer.tapmango.com/home/register?mid=EAAAAIXnamiKuX5pkn9Mkuc6AY5%2b9Wxy%2fDJpeAsyZiqT75F6"
          target="_blank"
        >
          JOIN OUR REWARDS PROGRAM
        </a>{' '}
        <br /> AND RECEIVE 10% OFF YOUR FIRST ORDER
      </p>
      {/* <form action="#" className={styles.formContainer}>
        <input placeholder="EMAIL" type="email" className={styles.input} />
        <button className={styles.button}>Submit</button>
      </form> */}
    </div>
  );
}
