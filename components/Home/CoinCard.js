import styles from "./CoinCard.module.css";
import Image from "next/image";

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
        <p>{symbol}</p>
        <p> {id}</p>
      </div>
      <div className={styles.cardBody}>
        {/* <Image src={image} width={20} height={20} alt={name} /> */}
        <p>{name}</p>
      </div>
      <div className={styles.cardBody}>
        <p>{current_price}</p>
        <p>{price_change_percentage_24h}</p>
      </div>
      <div className={styles.cardChart}>
        <p>chart</p>
      </div>
    </div>
  );
};

export default CoinCard;
