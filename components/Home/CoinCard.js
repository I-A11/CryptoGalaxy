import Image from "next/image";
import styles from "./CoinCard.module.css";

const priceFormat = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "AUD",
});

const CoinCard = ({
  id,
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <Image src={image} width={35} height={35} alt={name} />
        <div className={styles.coinName}>
          <div> {name}</div>
          <div className={styles.coinSymbol}>{symbol}</div>
        </div>
      </div>
      <div className={styles.underline}></div>
      <div className={styles.cardBody}>
        <div className={styles.price}>{priceFormat.format(current_price)}</div>
        <div className={styles.change}>
          {price_change_percentage_24h < 0 ? (
            <p className={styles.coinPercentRed}>
              ({price_change_percentage_24h.toFixed(2)}%)
            </p>
          ) : (
            <p className={styles.coinPercentGreen}>
              ({price_change_percentage_24h.toFixed(2)}%)
            </p>
          )}
        </div>
      </div>
      <div className={styles.cardChart}>
        <div>chart</div>
      </div>
    </div>
  );
};

export default CoinCard;
