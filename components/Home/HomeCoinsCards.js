import { useState, useEffect } from "react";
import axios from "axios";
import CoinCard from "./CoinCard";
import styles from "./HomeCoinsCards.module.css";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const HomeCoinsCards = () => {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    try {
      const res = await axios(url);
      const data = res.data;
      // console.log(data);
      setCoins(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

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
          <CoinCard />
          <CoinCard />
        </div>
      </section>
    </div>
  );
};

export default HomeCoinsCards;
