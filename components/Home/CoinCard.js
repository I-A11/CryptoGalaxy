import Image from "next/image";
import { priceFormat } from "@/utils/utils";
import styles from "./CoinCard.module.css";

const CoinCard = ({
  id,
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
  high_24h,
  low_24h,
  market_cap,
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
      <div className={styles.cardInfo}>
        <div>
          <div>
            High-24 Price: <span className={styles.high}>{high_24h}</span>
          </div>
          <div>
            Low-24 Price: <span className={styles.low}>{low_24h}</span>
          </div>
        </div>
      </div>
      <div className={styles.cap}>
        Market Cap: <span>{priceFormat.format(market_cap)}</span>
      </div>
    </div>
  );
};

export default CoinCard;
