import { useForm } from '@formspree/react';
import styles from './form.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Loader from 'components/loader';

export default function Form() {
  const [state, handleSubmit] = useForm('mqkozgoo');
  if (state.succeeded) {
    return (
      <div className={styles.successText}>
        <Link href="/">
          <Image
            src="https://www.midnightcookie.ca/wp-content/uploads/2021/10/Midnight-Cookie-Logo-sde1.png"
            width={100}
            height={100}
            alt=""
            priority
          />
        </Link>
        <p>Thank you! We will get back to you shortly.</p>
      </div>
    );
  }
  if (state.submitting) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.title}>
        Contact us if you have any questions or general inquiries
      </p>
      <div className={clsx(styles.inputContainer, styles.responsiveInput)}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />
      </div>
      <div className={clsx(styles.inputContainer, styles.responsiveInput)}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>
      <div className={clsx(styles.inputContainer)}>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className={styles.submitButton}
      >
        Submit
      </button>
    </form>
  );
}
