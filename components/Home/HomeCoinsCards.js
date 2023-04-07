import CoinCard from "./CoinCard";
import styles from "./HomeCoinsCards.module.css";

const HomeCoinsCards = () => {
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
        </div>
      </section>
    </div>
  );
};

export default HomeCoinsCards;
