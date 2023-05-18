import Link from "next/link";
import Image from "next/image";
import { priceFormat } from "@/utils/utils";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
import styles from "./Coin.module.css";

const Coin = ({ coin }) => {
  const {
    image,
    name,
    id,
    current_price: price,
    symbol,
    price_change_percentage_24h: priceChange,
    market_cap: market,
  } = coin;
  return (
    <div className="section">
      <div className={styles.coinContainer}>
        <div className={styles.coinDetails}>
          <Image src={image} alt={name} width={25} height={25} />
          <div>{name}</div>
          <span className={styles.coinSymbol}>({symbol})</span>
        </div>
        <div className={styles.coinPrice}>{priceFormat.format(price)}</div>
        <div className={`coinPriceChange ${priceChange < 0 ? "red" : "green"}`}>
          {priceChange < 0 ? <BsArrowDownRight /> : <BsArrowUpRight />}
          {priceChange}
        </div>
        <Link className={styles.coinInfo} href={`/details/${id}`}>
          info
        </Link>
      </div>
    </div>
  );
};

export default Coin;
