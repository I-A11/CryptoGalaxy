import CoinChart from "@/components/CoinsDetails/CoinChart";
import CoinDetails from "@/components/CoinsDetails/coinDetails";

const CoinDetail = () => {
  return (
    <div className="headerBottom">
      <h1>Details page</h1>
      <CoinChart />
      <CoinDetails />
    </div>
  );
};

export default CoinDetail;
