import Image from "next/image";
import User from "@/assets/images/user.png";
import Verify from "@/assets/images/verify.png";
import Money from "@/assets/images/money.png";
import styles from "./GetStarted.module.css";

const GetStarted = () => {
  return (
    <div className='section'>
      <h2 className={styles.getStartedHeading}>
        <span className='text-gradient'>Get started</span> in minutes
      </h2>
      <div className={styles.getStartedContainer}>
        <div className={styles.getStartedCard}>
          <Image src={User} width={60} alt='User icon' />
          <h3>Create an account</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            voluptatem quod odit voluptates enim.
          </p>
        </div>
        <div className={styles.getStartedCard}>
          <Image src={Verify} width={60} alt='Verify icon' />
          <h3>Verify your identity</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            voluptatem quod odit voluptates enim.
          </p>
        </div>
        <div className={styles.getStartedCard}>
          <Image src={Money} width={60} alt='Money icon' />
          <h3>Start Trading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            voluptatem quod odit voluptates enim.
          </p>
        </div>
      </div>
      <div className='underline underline-center'></div>
    </div>
  );
};

export default GetStarted;
