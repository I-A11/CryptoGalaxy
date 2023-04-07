import styles from "./CoinCard.module.css";

const CoinCard = ({ image, name, symbol, price, priceChange }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <p>coin symbol</p>
        <p>coin id</p>
      </div>
      <div className={styles.cardBody}>
        <p>price</p>
        <p>price_change_</p>
      </div>
      <div className={styles.cardChart}>
        <p>chart</p>
      </div>
    </div>
  );
};

export default CoinCard;
