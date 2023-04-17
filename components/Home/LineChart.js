import React, { useEffect, useState } from "react";
import axios from "axios";
// Chart //
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { useGlobalContext } from "@/context/context";
// import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart //

function App() {
  const { coins, loading } = useGlobalContext();
  const [data, setData] = useState(null);
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  });

  const selectedCoin = coins.find((x) => {
    if (x.id.toUpperCase === x.name) return x.id;
  });
  axios
    .get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=aud&days=30&interval=daily`
    )
    .then((response) => {
      //   console.log(response.data);
      setData({
        labels: response.data.prices.map((price) => {
          return price[0];
        }),
        datasets: [
          {
            label: "Dataset 1",
            data: response.data.prices.map((price) => {
              return price[1];
            }),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      });
    });

  return (
    <>
      <div className='App'>
        {/* <select
          onChange={(e) => {
            const coin = cryptos?.find((x) => x.id === e.target.value);
            setSelected(coin);
          }}
        >
          <option>Choose Coin</option>
          {cryptos
            ? cryptos.map((crypto) => {
                const { name, id } = crypto;
                return (
                  <option key={id} value={id}>
                    {name}
                  </option>
                );
                // return ;
              })
            : null}
        </select> */}
        {/* <select
          onChange={(e) => {
            setRange(parseInt(e.target.value));
          }}
        >
          <option value={30}>30 Days</option>
          <option value={7}>7 Days</option>
          <option value={1}>24 Hours</option>
        </select> */}
      </div>
      {/* {selected ? <CryptoSummary crypto={selected} /> : null} */}
      {data ? (
        <div style={{}}>
          {data ? <Line options={options} data={data} height={200} /> : null}
        </div>
      ) : null}
    </>
  );
}

export default App;
