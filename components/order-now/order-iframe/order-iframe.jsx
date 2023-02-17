import styles from './order-iframe.module.scss';
export default function OrderIframe() {
  return (
    <iframe
      src="https://order.tapmango.com/merchant/dfb63169-3067-4b49-89f3-09deeb3eba9b/order/catalog"
      className={styles.orderIframe}
    ></iframe>
  );
}
