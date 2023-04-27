import Image from "next/image";
import Mobile from "@/assets/images/mobile.png";
import Laptop from "@/assets/images/laptop.png";
import Coins from "@/assets/images/coins.png";
import Purchase from "@/assets/images/purchase.png";
import Security from "@/assets/images/security.png";
import Girl from "@/assets/images/girl.png";
import styles from "./Features.module.css";

const Feature = () => {
  return (
    <div className='section'>
      <h2 className={styles.featureHeading}>
        <span className='text-gradient'>Our Services</span> & Features
      </h2>
      <div className={styles.featuresContainer}>
        <div className={styles.firstRow}>
          <div className={styles.featuresCards}>
            <Image
              className={styles.featuresCardsImage}
              src={Mobile}
              width={270}
              alt='mobile image'
            />
            <div className='underlineGray'></div>
            <h3> Currency Converter</h3>
            <p>
              There are many variations of available, but the majority have
              suffered alteration in some form,
            </p>
          </div>
          <div className={styles.featuresCards}>
            <Image
              className={styles.featuresCardsImage}
              src={Laptop}
              width={300}
              alt='Laptop image'
            />
            <div className='underlineGray'></div>
            <h3> Margin Trading</h3>
            <p>
              There are many variations of available, but the majority have
              suffered alteration in some form,
            </p>
          </div>
        </div>
        <div className={styles.secondRow}>
          <Image src={Coins} width={280} alt='Coins image' />
        </div>
        <div className={styles.thirdRow}>
          <div className={styles.featuresCards}>
            <Image
              className={styles.featuresCardsImage}
              src={Purchase}
              width={300}
              alt='Purchase image'
            />
            <div className='underlineGray'></div>
            <h3> Advice For Purchase</h3>
            <p>
              There are many variations of available, but the majority have
              suffered alteration in some form,
            </p>
          </div>
          <div className={styles.girl}>
            <Image src={Girl} width={270} alt='Girl image' />
          </div>
          <div className={styles.featuresCards}>
            <Image
              className={styles.featuresCardsImage}
              src={Security}
              width={290}
              alt='Security image'
            />
            <div className='underlineGray'></div>
            <h3> Secure Wallet</h3>
            <p>
              There are many variations of available, but the majority have
              suffered alteration in some form,
            </p>
          </div>
        </div>
      </div>
      <div className='underline underline-center'></div>
    </div>
  );
};

export default Feature;
