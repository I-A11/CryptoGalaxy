import styles from "./wallet.module.css";
import Image from "next/image";
import WalletImage from "@/assets/images/wallet.jpg";
import TradeImage from "@/assets/images/app.jpg";
import AccountImage from "@/assets/images/control.jpg";
import GetStarted from "@/components/Home/GetStarted";

const Wallet = () => {
  return (
    <div className="headerBottom">
      <div className="section">
        <div className={styles.walletContainer}>
          <div className={styles.walletRow}>
            <div className={styles.walletRowText}>
              <h1>
                <span className="text-gradient">Secure</span> Wallet
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                quisquam placeat architecto iste doloribus adipisci eaque labore
                inventore possimus? Hic, facilis consequuntur? Recusandae,
                veniam error. Voluptatibus atque quod expedita repellendus.
              </p>
            </div>
            <Image
              className={styles.walletRowImg}
              src={WalletImage}
              alt="wallet image"
              width={300}
            />
          </div>
          <div className={styles.walletRowSec}>
            <Image
              className={styles.walletRowImg}
              src={TradeImage}
              alt="wallet image"
              width={400}
            />

            <div className={styles.walletRowTextSec}>
              <h2>
                <span className="text-gradient">Deposit</span> & Trade
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                quisquam placeat architecto iste doloribus adipisci eaque labore
                inventore possimus? Hic, facilis consequuntur? Recusandae,
                veniam error. Voluptatibus atque quod expedita repellendus.
                inventore possimus? Hic, facilis consequuntur? Recusandae,
                veniam error. Voluptatibus atque quod expedita repellendus.
              </p>
            </div>
          </div>
          <div className={styles.walletRow}>
            <div className={styles.walletRowText}>
              <h2>
                <span className="text-gradient">Control </span> Your Account
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                quisquam placeat architecto iste doloribus adipisci eaque labore
                inventore possimus? Hic, facilis consequuntur? Recusandae,
                veniam error. Voluptatibus atque quod expedita repellendus.
              </p>
            </div>
            <Image
              className={styles.walletRowImg}
              src={AccountImage}
              alt="wallet image"
              width={300}
            />
          </div>
        </div>
        <div className="underline underline-center"></div>
      </div>
      <GetStarted />
    </div>
  );
};

export default Wallet;
