import useAxios from "@/hooks/useAxios";
import styles from "./explore.module.css";
import Coin from "@/components/Home/Explore/Coin";
import GetStarted from "@/components/Home/GetStarted";

const Explore = () => {
  const { response, loading } = useAxios(
    "coins/markets?vs_currency=aud&order=market_cap_desc&per_page=15&page=1&sparkline=false&locale=en"
  );

  return (
    <div className="section">
      <div className="headerBottom">
        <div className={styles.marketContainer}>
          <h1>
            Explore <span className="text-gradient">Markets</span>
          </h1>
          <div className="underline underline-center"></div>
          <div className={styles.coinsContainer}>
            {response &&
              response.map((coin) => {
                return <Coin coin={coin} key={coin.id} {...coin} />;
              })}
          </div>
        </div>
      </div>
      <GetStarted />
    </div>
  );
};

export default Explore;
