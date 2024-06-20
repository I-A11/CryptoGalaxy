import Link from "next/link";
import Image from "next/image";
import { priceFormat } from "@/utils/utils";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
import styles from "./Coin.module.css";
import coins from "@/assets/coins";

const Coin = ({ coin }) => {
  const {
    // image,
    name,
    id,
    current_price: price,
    symbol,
    price_change_percentage_24h: priceChange,
    market_cap: market,
  } = coin;

  // Find correct image for image card.
  const coinImage = coins.find((c) => c.alt === symbol.toLowerCase());

  return (
    <div className="section">
      <div className={styles.coinContainer}>
        <div className={styles.coinDetails}>
          {coinImage && (
            <Image
              src={coinImage.src}
              alt={coinImage.alt}
              width={25}
              height={25}
            />
          )}

          <div>{name}</div>
          <span className={styles.coinSymbol}>({symbol})</span>
        </div>
        <div className={styles.coinPrice}>{priceFormat.format(price)}</div>
        <div className={`coinPriceChange ${priceChange < 0 ? "red" : "green"}`}>
          {priceChange < 0 ? <BsArrowDownRight /> : <BsArrowUpRight />}
          {priceChange}
        </div>
        <div className={styles.coinInfo}>
          <div className={styles.coinMarket}>Market Cap</div>
          <div>{priceFormat.format(market)}</div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
