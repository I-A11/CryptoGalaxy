import { useState } from "react";
import CoinCard from "./CoinCard";
import { useGlobalContext } from "@/context/context";
import styles from "./HomeCoinsCards.module.css";

const HomeCoinsCards = () => {
  const { coins, loading } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className='section'>
      <section className={styles.coinsContainer}>
        <h2>
          <span className='text-gradient'>Cryptocurrency</span> Live Pricing
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some look even slightly
          believable.
        </p>
        <div className={styles.cardSlider}>
          {coins.map((coin) => {
            const {
              id,
              name,
              image,
              symbol,
              price_change_percentage_24h,
              current_price,
            } = coin;
            return <CoinCard key={id} {...coin} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default HomeCoinsCards;
