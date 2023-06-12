import { useState, useE, useEffect } from "react";
import axios from "axios";
import styles from "./Calculator.module.css";

const url = "https://api.coinranking.com/v2/coins";

const Calculator = () => {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState("");

  const initialValues = {
    audAmount: "",
    quantity: "",
  };

  const [values, setValues] = useState({ ...initialValues });

  const price = Number(selected.price);

  const handleAmount = (e) => {
    const audAmount = e.target.value;
    if (!isNaN(audAmount)) {
      let quantity = audAmount / price;
      quantity = quantity.toFixed(quantity > 1 ? 4 : 8);
      setValues((prevState) => ({ ...prevState, audAmount, quantity }));
    }
  };

  const handleQuantity = (e) => {
    const quantity = e.target.value;
    if (!isNaN(quantity)) {
      const audAmount = (quantity * price).toFixed(2);
      setValues((prevState) => ({ ...prevState, audAmount, quantity }));
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const coinList = response.data.data.coins;
      setList(coinList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectCoin = (e) => {
    if (e.target.value === "Select coin") {
      setValues({ ...initialValues });
      return;
    }

    const coin = list.find((x) => x.name === e.target.value);
    setSelected(coin);
    setValues({ ...initialValues });
  };

  return (
    <div className="section">
      <div className={styles.calculatorContainer}>
        <h4>Cryptocurrency Calculator</h4>
        <form>
          <div className={styles.selectCoin}>
            <select onChange={(e) => selectCoin(e)}>
              <option>Select coin</option>
              {list
                ? list.map((crypto) => {
                    const { name } = crypto;
                    return <option key={name}>{name}</option>;
                  })
                : null}
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="audAmount">US amount</label>
            <input
              type="number"
              id="audAmount"
              name="audAmount"
              placeholder="Enter US"
              value={values.audAmount}
              onChange={handleAmount}
            />
            <label htmlFor="audAmount">Coin amount</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Enter quantity"
              value={values.quantity}
              onChange={handleQuantity}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
